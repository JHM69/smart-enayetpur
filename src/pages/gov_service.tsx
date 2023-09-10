// components/Weather.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDayCloudy } from 'react-icons/wi'; // Replace this with the appropriate weather icons
import { FaAddressCard, FaBirthdayCake, FaMoneyBillWave } from 'react-icons/fa';
import Modal from '~/components/partials/Modal';
import { MdCall } from 'react-icons/md';

const Service = () => {
  const [showNid, setShowNid] = useState(false);
  const [showNid2, setShowNid2] = useState(false);
  const [showNid3, setShowNid3] = useState(false);

  return (
    <div className="rounded-lg p-12 shadow-md">
      <section id="online-market" className="first-letter:py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-semibold">সরকারী সেবা সমূহ</h2>
          <p className="text-lg leading-relaxed">
            সরকারী বিভিন্ন সেবা সমূহ ঘরে বসে পান খুব সহজেই
          </p>

          <div className="item-center flex flex-col justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid(true);
              }}
              className="my-3 flex items-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              <FaAddressCard className="mr-2" />
              আপনার NID এর জন্য আবেদন করুন
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid2(true);
              }}
              className="my-3 flex items-center rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            >
              <FaBirthdayCake className="mr-2" />
              জন্মনিবন্ধন এর জন্য আবেদন করুন
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid3(true);
              }}
              className="my-3 flex items-center rounded-full bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
            >
              <FaMoneyBillWave className="mr-2" />
              ভাতা পেতে আবেদন করুন
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid3(true);
              }}
              className="my-3 flex items-center rounded-full bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
            >
              <MdCall className="mr-2" />
              সরকারী তথ্য জানতে কল করুনঃ 333
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid3(true);
              }}
              className="my-3 flex items-center rounded-full bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
            >
              <MdCall className="mr-2" />
              ইমার্জেন্সী সেবা পেতে কল করুনঃ 999
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid3(true);
              }}
              className="my-3 flex items-center rounded-full bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
            >
              <MdCall className="mr-2" />
              দূর্যোগ ব্যাবস্থাপনায় সহায়তা পেতে কল করুনঃ 1090
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowNid3(true);
              }}
              className="my-3 flex items-center rounded-full bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
            >
              <MdCall className="mr-2" />
              ফায়ার সার্ভিস এ কল করুনঃ 16163
            </button>
          </div>
        </div>
      </section>
      {showNid && (
        <Modal
          onClose={() => {
            setShowNid(false);
          }}
          title={'Nid এর আবেদনের জন্য নিচের আবেদন ফর্মটি পূরণ করুন '}
        >
          <form className="   space-y-4 overflow-auto p-4">
            <div className="flex flex-col">
              <label htmlFor="full_name" className="text-md">
                পূর্ণ নাম
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="father_name" className="text-md">
                পিতার নাম
              </label>
              <input
                type="text"
                id="father_name"
                name="father_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mother_name" className="text-md">
                মাতার নাম
              </label>
              <input
                type="text"
                id="mother_name"
                name="mother_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date_of_birth" className="text-md">
                জন্ম তারিখ
              </label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-md">
                ঠিকানা
              </label>
              <textarea
                id="address"
                name="address"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="education" className="text-md">
                শিক্ষাগত যোগ্যতা
              </label>
              <input
                type="text"
                id="education"
                name="education"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="photo" className="text-md">
                ছবি
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                required
                className="px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="signature" className="text-md">
                স্বাক্ষর
              </label>
              <input
                type="file"
                id="signature"
                name="signature"
                accept="image/*"
                required
                className="px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            >
              সাবমিট
            </button>
          </form>
        </Modal>
      )}
      {showNid2 && (
        <Modal
          onClose={() => {
            setShowNid2(false);
          }}
          title={
            'Birth Certificate এর আবেদনের জন্য নিচের আবেদন ফর্মটি পূরণ করুন'
          }
        >
          {' '}
          <form className="space-y-4 p-4">
            <div className="flex flex-col">
              <label htmlFor="full_name" className="text-md">
                পূর্ণ নাম
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="father_name" className="text-md">
                পিতার নাম
              </label>
              <input
                type="text"
                id="father_name"
                name="father_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mother_name" className="text-md">
                মাতার নাম
              </label>
              <input
                type="text"
                id="mother_name"
                name="mother_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date_of_birth" className="text-md">
                জন্ম তারিখ
              </label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-md">
                ঠিকানা
              </label>
              <textarea
                id="address"
                name="address"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="education" className="text-md">
                শিক্ষাগত যোগ্যতা
              </label>
              <input
                type="text"
                id="education"
                name="education"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="photo" className="text-md">
                ছবি
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                required
                className="px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="signature" className="text-md">
                স্বাক্ষর
              </label>
              <input
                type="file"
                id="signature"
                name="signature"
                accept="image/*"
                required
                className="px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            >
              সাবমিট
            </button>
          </form>
        </Modal>
      )}
      {showNid3 && (
        <Modal
          onClose={() => {
            setShowNid3(false);
          }}
          title={'ভাতা পাওয়ার জন্য আবেদন ফর্ম টি পূরণ করুন'}
        >
          {' '}
          <form className="space-y-4 p-4">
            <div className="flex flex-col">
              <label htmlFor="full_name" className="text-md">
                পূর্ণ নাম
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="father_name" className="text-md">
                পিতার নাম
              </label>
              <input
                type="text"
                id="father_name"
                name="father_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mother_name" className="text-md">
                মাতার নাম
              </label>
              <input
                type="text"
                id="mother_name"
                name="mother_name"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date_of_birth" className="text-md">
                জন্ম তারিখ
              </label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-md">
                ঠিকানা
              </label>
              <textarea
                id="address"
                name="address"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="education" className="text-md">
                শিক্ষাগত যোগ্যতা
              </label>
              <input
                type="text"
                id="education"
                name="education"
                required
                className="rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="photo" className="text-md">
                ছবি
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                required
                className="px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="signature" className="text-md">
                স্বাক্ষর
              </label>
              <input
                type="file"
                id="signature"
                name="signature"
                accept="image/*"
                required
                className="px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            >
              সাবমিট
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Service;
