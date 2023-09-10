import { sendSMS } from '~/utils/sendSMS';
import { prisma } from '../db/client';

interface handlePaymentSuccessBookParams {
  paymentGId: string;
  orderId: string;
  amount: number;
  bookOrderId: string;
}

export default async function handlePaymentSuccessBook({
  paymentGId,
  orderId,
  bookOrderId,
}: handlePaymentSuccessBookParams) {
  const [paymentsWithResult] = await Promise.allSettled([
    await prisma.payment.findMany({
      where: { paymentGId },
      include: { book: { include: { addedBy: true } } },
    }),
    await prisma.payment.updateMany({
      where: { paymentGId },
      data: { orderId, status: 'SUCCESS', type: 'BOOK' },
    }),

    await prisma.bookOrder.update({
      where: { id: bookOrderId },
      data: { status: 'SUCCESS' },
    }),
  ]);

  const payments = paymentsWithResult?.value;
  const userId = payments[0].userId;

  // delete all records of cart & enroll book;
  await Promise.allSettled([
    // await prisma.student.upsert({
    //   where: { userId: payments[0].userId },
    //   update: {
    //     books: {
    //       connect: payments.map((payment) => ({ id: payment.bookId })),
    //     },
    //   },
    //   create: {
    //     userId: payments[0].userId,
    //     books: {
    //       connect: payments.map((payment) => ({ id: payment.bookId })),
    //     },
    //   },
    // }),
    await prisma.cart.deleteMany({ where: { userId } }),
  ]);

  // create revenues for instructors:
  await Promise.all(
    payments.map(async (payment) => {
      await prisma.revenue.create({
        data: {
          type: 'BOOK',
          amount: BigInt(payment.book.bookPrice),
          user: { connect: { id: payment.book.addedBy.id } },
        },
      });
    }),
  );
}
