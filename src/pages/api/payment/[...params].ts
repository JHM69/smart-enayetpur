//
//
import { nanoid } from 'nanoid';
import { PATHS } from '~/constants';
import handlePaymentSuccess from '~/server/helper/handlePaymentSuccess';

import { prisma } from '../../../server/db/client';

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import qs from 'qs';
const payment = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, query, body } = req;
    const { params } = query;

    const SSLCOMMERZ_CONFIGS = JSON.parse(
      String(process.env.SSLCOMMERZ_CONFIGS),
    );

    const requiredConfigs = [
      'store_id',
      'store_passwd',
      'api_url',
      'success_url',
      'fail_url',
      'cancel_url',
    ];

    for (const config of requiredConfigs) {
      if (!SSLCOMMERZ_CONFIGS[config]) {
        return res.status(500).json({
          message: `${config} is missing in SSLCommerz configs`,
        });
      }
    }

    if (method === 'POST' && params && params[0] === 'create') {
      const { courseIds, userId, orderDescription, name, amount } = body;

      if (!orderDescription) {
        return res.status(400).json({
          error: 'orderDescription is missing',
          message: 'orderDescription is required',
        });
      }

      if (!userId) {
        return res.status(400).json({
          error: 'userId is missing',
          message: 'userId is required',
        });
      }

      if (!courseIds || !Array.isArray(courseIds)) {
        return res.status(400).json({
          error: 'courseIds is missing or not an array',
          message: 'courses id are required',
        });
      }

      await prisma.user.update({
        where: { id: userId },
        data: {
          payments: {
            create: courseIds.map((courseId) => ({
              status: 'PENDING',
              course: { connect: { id: courseId } },
              paymentGId: orderDescription,
            })),
          },
        },
      });

      const storeId = SSLCOMMERZ_CONFIGS.store_id;
      const storePasswd = SSLCOMMERZ_CONFIGS.store_passwd;
      const sslUrl = SSLCOMMERZ_CONFIGS.api_url;
      const successUrl = SSLCOMMERZ_CONFIGS.success_url;
      const failUrl = SSLCOMMERZ_CONFIGS.fail_url;
      const cancelUrl = SSLCOMMERZ_CONFIGS.cancel_url;

      const orderId = nanoid();
      const currency = 'BDT';

      const postData = {
        store_id: storeId,
        store_passwd: storePasswd,
        total_amount: amount,
        currency: currency,
        tran_id: orderId,
        success_url: successUrl,
        fail_url: failUrl,
        cancel_url: cancelUrl,
        ipn_url: '',
        product_name: orderDescription,
        product_category: 'Online Course',
        product_profile: 'general',
        value_a: orderDescription,
        value_b: userId,
        multi_card_name: '',
        allowed_bin: '',
        cus_name: name,
      };

      const config = {
        method: 'post',
        url: sslUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(postData),
      };

      axios(config)
        .then(function (response: {
          data: { status: string; GatewayPageURL: any; message: any };
        }) {
          //console.log('SSLCommerz: ', response.data);
          if (response.data.status === 'SUCCESS') {
            //console.log('SSLCommerz SUCCESS: ', response.data.GatewayPageURL);
            const gatewayUrl = response.data.GatewayPageURL;
            return res.status(200).json({ gatewayUrl, postData });
          } else {
            return res.status(500).json({ error: response.data.message });
          }
        })
        .catch(function (error: any) {
          console.error('SSLCommerz ERROR: ', error);
          return res.status(500).json({
            error: 'Error occurred while communicating with SSLCommerz',
          });
        });
    }

    if (method === 'POST' && params && params[0] === 'sslcommerz_return') {
      const { status, value_a, tran_id, amount, val_id } = req.body;

      if (status === 'FAILED') {
        return res.redirect(`/payment_failed?tran_id=${tran_id}`);
      } else if (status === 'VALID') {
        const config = {
          method: 'get',
          //url: 'https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php',
          url: ' 	https://securepay.sslcommerz.com/validator/api/validationserverAPI.php',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            val_id: val_id,
            //store_id: 'mpbia644d088d85303',
            //store_passwd: 'mpbia644d088d85303@ssl',
            store_id: 'mpbianlive',
            store_passwd: '64B900EF239B316556',
          },
        };
        // console.log('config');
        // console.log(config);
        //mpbia644d088d85303
        //mpbia644d088d85303@ssl

        //mpbianlive
        //64B900EF239B316556
        axios(config)
          .then(async function (des) {
            // console.log('Validation Api Returned: ');
            // console.log(des.data);
            if (des.data.status === 'VALID' || 'VALIDATED') {
              await handlePaymentSuccess({
                paymentGId: value_a,
                orderId: tran_id,
                amount,
              });

              // await sendSMS(
              //   value_d,
              //   `Deat ${value_b}, Your payment ${amount} tk has been successfully recieved. We will ship your book as soon as possible. Your order id : ${value_c}. for query call: 01320820854 `,
              // );

              // return res
              //   .status(200)
              //   .json({
              //     gatewayUrl: `/payment_success?tran_id=${tran_id}&courseId=${value_a}`,
              //   });

              return res.redirect(
                `/payment_success?tran_id=${tran_id}&courseId=${value_a}`,
              );
            } else {
              return res.status(500).json({ error: des.data.message });
            }
          })
          .catch(function (error: any) {
            console.error('SSLCommerz ERROR: ', error);
            return res.status(500).json({
              error: 'Error occurred while communicating with SSLCommerz',
            });
          });
      } else {
        return res.redirect(`/${PATHS.CART}`);
      }
    }
  } catch (error) {
    console.error('PAYMENT ERROR: ', error);
    return res
      .status(500)
      .json({ error: 'Error occurred while processing payment' });
  }
};

export default payment;
