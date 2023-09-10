import { useEffect, useRef, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useIntersectionObserver } from 'usehooks-ts';
import Loading from '~/components/buttons/Loading';
import useCart from '~/contexts/CartContext';

import { prisma } from '~/server/db/client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import CartItem from './CartItem';
import CheckoutOnly from './CheckoutOnly';
import Modal from '../../partials/Modal';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import {
  FaAddressBook,
  FaComment,
  FaCreditCard,
  FaMoneyBillAlt,
  FaPhoneAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { divisions } from '~/utils/divisions';
import { districts } from '~/utils/districts';
import { upazilas } from '~/utils/upazilas';
import { useSession } from 'next-auth/react';

export default function Cart() {
  const refBtnCheckout = useRef<HTMLButtonElement | null>(null);
  const entry = useIntersectionObserver(refBtnCheckout, {});
  const cartCtx = useCart();
  const { data: session } = useSession();

  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const [name, setName] = useState(session?.user?.name);
  const [number, setNumber] = useState('');

  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    if (cartCtx?.userWithCart?.cart[0]?.bookId) {
      if (name === null || name === '') {
        return alert('Name is Empty');
      }
      if (number === null || number === '' || number === undefined) {
        return alert('Number is Empty');
      } else if (number.length !== 11) {
        return alert('Number must be 11 digits long');
      }
      if (address === null || address === '') {
        return alert('Address is Empty');
      }

      if (
        selectedDistrict === '' ||
        selectedDivision === '' ||
        selectedUpazila === ''
      ) {
        return alert('Enter your Division, District and Upazila Correctly. ');
      }
    }
    setShowModal(true);
  };

  const handleCheckout = async () => {
    if (!agreed) {
      toast.error('Please agree to the terms and conditions.');
      return;
    }

    if (
      name &&
      number &&
      address &&
      selectedDistrict &&
      selectedDivision &&
      selectedUpazila
    ) {
      const bookData = {
        nameUser: name,
        number: number,
        address: address,
        comment,
        district: districts.find((district) => district.id === selectedDistrict)
          ?.name,
        division: divisions.find((division) => division.id === selectedDivision)
          ?.name,
        upazila: upazilas.find((upazila) => upazila.id === selectedUpazila)
          ?.name,
        type: paymentMethod,
      };
      await cartCtx?.handleCheckoutBook(bookData);
    } else {
      await cartCtx?.handleCheckout();
    }
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={handleCloseModal} title={'Are you agree?'}>
          <div className="p-4 text-center">
            <h2 className="mb-4 text-2xl text-black dark:text-white md:text-xl lg:text-2xl">
              Please read and agree to the terms and conditions before
              proceeding.
              <div className="my-3">
                Click on the{' '}
                <span className="text-semibold rounded-md bg-purple-100 px-2">
                  I Agree...
                </span>{' '}
                Checkbox to Continue Next
              </div>
            </h2>

            <div className="flex flex-col items-center">
              <label className="mb-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-purple-500 md:h-8 md:w-8"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span className="ml-3 text-xl text-gray-900 dark:text-white">
                  I agree to the{' '}
                  <Link
                    className="text-violet-800"
                    href="/terms_of_use"
                    target="_blank"
                  >
                    Terms and Conditions
                  </Link>
                  {', '}
                  <Link
                    className="text-violet-800"
                    href="/privacy_policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link
                    className="text-violet-800"
                    href="/refund_policy"
                    target="_blank"
                  >
                    Refund Policy
                  </Link>
                  .
                </span>
              </label>
              <button
                className="rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white hover:bg-violet-900 md:px-6 md:py-3 lg:px-8 lg:py-4"
                onClick={handleCheckout}
              >
                Continue Next
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className="flex w-full flex-col p-4 md:p-6 lg:p-8">
        <CheckoutOnly
          shouldShow={
            !Boolean(entry?.isIntersecting) && !!refBtnCheckout.current
          }
        />

        <div className="flex items-center space-x-4">
          <ShoppingCartIcon className="h-10 w-10" />
          <h1 className="text-4xl font-semibold capitalize">Cart</h1>
        </div>

        <div className="mt-8 flex flex-col space-y-8 md:mt-12 md:flex-row md:space-y-0">
          <div className="flex w-full flex-col md:w-[50%] lg:m-4">
            <h2 className="text-2xl font-semibold">
              {cartCtx?.userWithCart && cartCtx?.userWithCart.cart
                ? cartCtx?.userWithCart.cart.length
                : 0}{' '}
              Course or Book in cart
            </h2>

            <If
              condition={
                cartCtx?.status === 'loading' ||
                cartCtx?.addCourseToCartStatus === 'loading'
              }
            >
              <Then>
                <div className="mt-10 flex h-full items-center justify-center">
                  <Loading />
                </div>
              </Then>
              <Else>
                <ul className="my-6 w-full space-y-8">
                  {cartCtx?.userWithCart?.cart?.length > 0 &&
                    cartCtx?.userWithCart?.cart.map((item) => (
                      <CartItem
                        courseId={item?.courseId || null}
                        bookId={item?.bookId || null}
                        wishlistId={
                          item.bookId
                            ? cartCtx?.userWithCart?.wishlist.find(
                                (elem) => elem.bookId === item.bookId,
                              )?.id || null
                            : cartCtx?.userWithCart?.wishlist.find(
                                (elem) => elem.courseId === item.courseId,
                              )?.id || null
                        }
                        isFavorite={
                          item.bookId
                            ? cartCtx?.userWithCart?.wishlist.some(
                                (elem) => elem.bookId === item.bookId,
                              )
                            : cartCtx?.userWithCart?.wishlist.some(
                                (elem) => elem.courseId === item.courseId,
                              )
                        }
                        cartId={item.id}
                        key={item.id}
                        course={item?.course}
                        book={item?.book}
                        refetchData={cartCtx.refetchData}
                      />
                    ))}
                </ul>
              </Else>
            </If>
          </div>

          <div className="mb-8 flex flex-1 flex-col space-y-6 md:mb-0 md:space-y-8">
            <h2 className="text-3xl font-semibold">Total:</h2>
            <p className="text-4xl font-bold text-rose-500">
              {new Intl.NumberFormat('bn-BD', {
                style: 'currency',
                currency: 'BDT',
              }).format(cartCtx?.totalAmount || 0)}
            </p>

            {cartCtx?.userWithCart?.cart?.length > 0 &&
              cartCtx?.userWithCart?.cart[0]?.bookId && (
                <div className="w-full space-y-4 rounded bg-white p-6 shadow-lg dark:bg-slate-800">
                  <div className="flex items-center space-x-2">
                    <FaUserAlt size={24} className="text-gray-500" />
                    <label htmlFor="name" className="font-semibold">
                      Name:
                    </label>
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                  <div className="flex items-center space-x-2">
                    <FaPhoneAlt size={24} className="text-gray-500" />
                    <label htmlFor="phone" className="font-semibold">
                      Phone Number:
                    </label>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    name="phone"
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                  <div className="flex items-center space-x-2">
                    <label htmlFor="phone" className="font-semibold">
                      Division:
                    </label>
                  </div>
                  <select
                    id="division"
                    name="division"
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                  >
                    <option value="">Select Division</option>
                    {divisions.map((division) => (
                      <option key={division.id} value={division.id}>
                        {division.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center space-x-2">
                    <label htmlFor="phone" className="font-semibold">
                      Districts:
                    </label>
                  </div>
                  <select
                    id="district"
                    name="district"
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedDivision}
                  >
                    <option value="">Select District</option>
                    {districts
                      .filter(
                        (district) => district.division_id === selectedDivision,
                      )
                      .map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                  </select>
                  <div className="flex items-center space-x-2">
                    <label htmlFor="phone" className="font-semibold">
                      Upazila:
                    </label>
                  </div>
                  <select
                    id="upazila"
                    name="upazila"
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    value={selectedUpazila}
                    onChange={(e) => setSelectedUpazila(e.target.value)}
                    disabled={!selectedDistrict}
                  >
                    <option value="">Select Upazila</option>
                    {upazilas
                      .filter(
                        (upazila) => upazila.district_id === selectedDistrict,
                      )
                      .map((upazila) => (
                        <option key={upazila.id} value={upazila.id}>
                          {upazila.name}
                        </option>
                      ))}
                  </select>
                  <div className="flex items-center space-x-2">
                    <FaAddressBook size={24} className="text-gray-500" />
                    <label htmlFor="address" className="font-semibold">
                      Full Address: (House, Road and Village)
                    </label>
                  </div>
                  <textarea
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    style={{ height: '100px' }} // Adjust the height value as needed
                    placeholder="Enter your address"
                  />
                  <div className="flex items-center space-x-2">
                    <FaComment size={24} className="text-gray-500" />
                    <label htmlFor="address" className="font-semibold">
                      Comment
                    </label>
                  </div>
                  <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full rounded border p-2 focus:border-blue-500 focus:outline-none"
                    style={{ height: '100px' }} // Adjust the height value as needed
                    placeholder="Enter your address"
                  />
                  <div className="flex items-center space-x-2">
                    <FaCreditCard size={24} className="text-gray-500" />
                    <label htmlFor="payment" className=" font-semibold">
                      Select Payment Method:
                    </label>
                  </div>

                  <div className="flex items-center gap-3 space-x-4 rounded-sm border px-3 outline-1 ">
                    <label
                      htmlFor="online"
                      className="flex cursor-pointer items-center"
                    >
                      <input
                        type="radio"
                        id="online"
                        name="payment"
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={handlePaymentChange}
                        className="sr-only"
                      />
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 ${
                          paymentMethod === 'online' ? 'bg-blue-500' : ''
                        }`}
                      >
                        <FaCreditCard className={`text-white`} />
                      </span>
                      <span
                        className={`mx-4 my-3 ml-2 px-6 py-3 text-lg ${
                          paymentMethod === 'online'
                            ? 'rounded-full bg-blue-500 font-bold text-white'
                            : ''
                        }`}
                      >
                        Pay Online (Bkash, Nagad, Bank etc)
                      </span>
                    </label>

                    <label
                      htmlFor="cash"
                      className="flex cursor-pointer items-center"
                    >
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={handlePaymentChange}
                        className="sr-only"
                      />
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 ${
                          paymentMethod === 'cash' ? 'bg-blue-500' : ''
                        }`}
                      >
                        <FaMoneyBillAlt className={`text-white`} />
                      </span>
                      <span
                        className={`mx-4 my-3 ml-2 px-6 py-3 text-lg ${
                          paymentMethod === 'cash'
                            ? 'rounded-full bg-blue-500 font-bold text-white'
                            : ''
                        }`}
                      >
                        Cash on Delivery(Pay Later)
                      </span>
                    </label>
                  </div>
                </div>
              )}

            {cartCtx?.totalAmount && cartCtx?.totalAmount !== 0 && (
              <button
                onClick={handleOpenModal}
                ref={refBtnCheckout}
                disabled={cartCtx?.checkoutState === 'loading'}
                className="absolute-center min-h-[4.4rem] rounded-lg bg-purple-600 p-4 text-white"
              >
                {cartCtx?.checkoutState === 'loading' ? <Loading /> : 'Pay'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
