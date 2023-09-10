// components/Weather.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDayCloudy } from 'react-icons/wi'; // Replace this with the appropriate weather icons
import { FaAddressCard, FaBirthdayCake, FaMoneyBillWave } from 'react-icons/fa';
import Modal from '~/components/partials/Modal';
import { MdCall } from 'react-icons/md';

const Utility = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="solution-box rounded-lg bg-white p-6 shadow-lg">
        <div>
          <img
            src="https://www.banglanews24.com/public/uploads/2019/12/15/BD-120191215093613.jpg"
            alt="Electricity"
            className="mx-auto h-64 w-full"
          />
        </div>
        <h3 className="m-2 text-xl font-bold">বিদ্যুৎ সংযোগ</h3>
        <p className="text-base text-gray-700">
          গ্রামীণ এলাকায় বিদ্যুৎ সংযোগ সম্পন্ন করা হচ্ছে। এই সংযোগ সম্পন্ন হওয়ার
          পর গ্রামীণ এলাকায় বিদ্যুৎ সরবরাহ করা হবে।
        </p>
        <ul className="pl-4 text-base text-gray-700">
          <li type="I">ঘরে ঘরে বিদ্যুৎ</li>
          <li type="I">সড়কে বিদ্যুৎ</li>
          <li type="I">সোলার প্যানেল স্থাপন</li>
          <li type="I">টার্বাইন বিদ্যুৎ প্রকল্প স্থাপন</li>
        </ul>
      </div>

      <div className="solution-box rounded-lg bg-white p-6 shadow-lg">
        <div>
          <img
            src="https://blog.swantonweld.com/hs-fs/hubfs/bigstock--180883798.jpg?width=975&name=bigstock--180883798.jpg"
            alt="water"
            className="mx-auto h-64 w-full"
          />
        </div>
        <h3 className="m-2 text-xl font-bold">পানি সরবরাহ</h3>
        <p className="text-base text-gray-700">
          গ্রামীণ এলাকায় পানি সরবরাহ করা হচ্ছে। এই সংযোগ সম্পন্ন হওয়ার পর
          গ্রামীণ এলাকায় পানি সরবরাহ করা হবে।
        </p>
        <ul className="pl-4 text-base text-gray-700">
          <li type="I">গভীর নলকূপ স্থাপন</li>
          <li type="I">কৃষিকাজে সেচ প্রদান</li>
          <li type="I">ওয়াটার টাওয়ার স্থাপন</li>
          <li type="I">ভ্রাম্যমাণ পানির ট্রাক</li>
        </ul>
      </div>

      <div className="solution-box rounded-lg bg-white p-6 shadow-lg">
        <div>
          <img
            src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/09/20/226249-four-lane-road.jpg"
            alt="water"
            className="mx-auto h-64 w-full"
          />
        </div>
        <h3 className="m-2 text-xl font-bold">ডিজিটাল সড়ক সংযোগ</h3>
        <p className="text-base text-gray-700">
          গ্রামীণ এলাকায় সড়ক সংযোগ সম্পন্ন করা হচ্ছে। এই সংযোগ সম্পন্ন হওয়ার পর
          গ্রামীণ এলাকায় সড়ক সংযোগ সম্পন্ন হবে।
        </p>
        <ul className="pl-4 text-base text-gray-700">
          <li type="I">সড়কে ট্রাফিক সিগন্যাল স্থাপন ও জেব্রা ক্রসিং</li>
          <li type="I">সড়কে বাতি স্থাপন</li>
          <li type="I">ফুটপাথ নির্মাণ</li>
          <li type="I">সড়কের দুই ধারে বৃক্ষ রোপণ</li>
        </ul>
      </div>
    </div>
  );
};

export default Utility;
