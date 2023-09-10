// components/Weather.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDayCloudy } from 'react-icons/wi'; // Replace this with the appropriate weather icons
import { FaAddressCard, FaBirthdayCake, FaMoneyBillWave } from 'react-icons/fa';
import Modal from '~/components/partials/Modal';
import { MdCall } from 'react-icons/md';

const Utility = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full p-4 md:w-1/3">
        <div className="solution-box flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div>
            <img
              src="https://klikinfotech.files.wordpress.com/2016/05/maxresdefaulta.jpg?w=1024"
              alt="folk"
              className="mx-auto h-64 w-full"
            />
          </div>
          <h3 className="m-2 text-xl font-bold">লোক সঙ্গীত</h3>
          <p className="flex-grow text-base text-gray-700"></p>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/3">
        <div className="solution-box flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div>
            <img
              src="https://bholanews24.com/wp-content/uploads/2019/08/IMG_20190827_175233-696x522.jpg"
              alt="drama"
              className="mx-auto h-64 w-full"
            />
          </div>
          <h3 className="m-2 text-xl font-bold">পথ নাটক</h3>
          <p className="flex-grow text-base text-gray-700"></p>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/3">
        <div className="solution-box flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div>
            <img
              src="https://theasifkamal.com/blog/wp-content/uploads/2017/10/image3-9.jpg"
              alt="art"
              className="mx-auto h-64 w-full"
            />
          </div>
          <h3 className="m-2 text-xl font-bold">চিত্রকল্প</h3>
          <p className="flex-grow text-base text-gray-700"></p>
        </div>
      </div>
    </div>
  );
};

export default Utility;
