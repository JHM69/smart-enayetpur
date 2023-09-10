// components/Environment.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDayCloudy } from 'react-icons/wi'; // Replace this with the appropriate weather icons
import { useAQIAPIs } from './useAQIAPI';

const Environment = () => {
  function convertToBengaliNumber(number) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const numberString = String(number);
    let result = '';

    for (let i = 0; i < numberString.length; i++) {
      const char = numberString[i];
      if (char >= '0' && char <= '9') {
        result += bnDigits[Number(char)];
      } else {
        result += char;
      }
    }

    return result;
  }

  function formatFloat(number: number): string {
    // Use the toFixed method to round the number to 2 decimal places
    const formattedNumber = number.toFixed(2);
    return convertToBengaliNumber(formattedNumber);
  }

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get(
          `https://api.waqi.info/feed/dhaka/?token=demo`,
        );

        if (response.status === 200) {
          setWeatherData(response.data.data);
          console.log(response.data.data);
        } else {
          console.error('Error fetching weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    }

    fetchWeatherData();
  }, []);

  const names = {
    pm25: 'particulate matter 2.5(pm 2.5)',
    pm10: 'particulate matter 10(pm 10)',
    o3: 'ওজন',
    no2: 'নাইট্রোজেন ডাই অক্সাইড',
    so2: 'সালফার ডাই অক্সাইড',
    co: 'কার্বন মনো অক্সাইড',
    t: 'তাপমাত্রা',
    w: 'বায়ুপ্রবাহ',
    r: 'বৃষ্টির সম্ভাবনা',
    h: 'আপেক্ষিক আদ্রতা',
    d: 'শিশির',
    p: 'বায়ু চাপ',
  };

  function getColorClass(value) {
    if (value >= 0 && value <= 50) {
      return 'bg-green-600 text-white';
    } else if (value >= 51 && value <= 100) {
      return 'bg-orange-400 text-white';
    } else if (value >= 101 && value <= 150) {
      return 'bg-yellow-700 text-white';
    } else if (value >= 151 && value <= 200) {
      return 'bg-red-400 text-white';
    } else if (value >= 201 && value <= 300) {
      return 'bg-red-600 text-white';
    } else {
      return 'bg-red-900 text-white';
    }
  }

  const getSpectrum = (iaqi) => {
    let ret = [];
    Object.entries(iaqi).map(function (item) {
      let obj = {};
      let key = names[item[0]] ? names[item[0]] : item[0];
      obj['key'] = key;
      obj['value'] = convertToBengaliNumber(item[1].v);
      ret.push(obj);
    });
    return ret;
  };

  return (
    <div className="rounded-lg p-12 shadow-md">
      <div className="flex items-center"></div>

      <section id="air-quality" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">বায়ুর মান</h2>

            {weatherData ? (
              <div className="details">
                <span>
                  Prominent Pollutant is,{' '}
                  <b>{names[weatherData.dominentpol]}</b>
                </span>
                <hr />
                <table className="mx-auto table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Parameter</th>
                      <th className="px-4 py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getSpectrum(weatherData?.iaqi).map((spectrum, i) => (
                      <tr key={i}>
                        <td className="border px-4 py-2">{spectrum.key}</td>
                        <td
                          className={`border px-4 py-2 ${getColorClass(
                            spectrum.value,
                          )}`}
                        >
                          {spectrum.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </section>

      <section id="waste-collection" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">
              গৃহস্থালি বজ্র সংগ্রহ এবং পুনব্যবহারযোগ্যকরণ{' '}
            </h2>

            <div className="p-4">
              <ul className="list-inside list-disc">
                <li className="text-lg">
                  সময়সূচি অনুযায়ী স্থানীয় বাসিন্দাদের জন্য বাজার সংগ্রহ
                  সরবরাহ করা হয়।
                </li>
                <li className="text-lg">
                  সংগ্রহণ করা বজ্র পুনর্চক্রণ করা হয় এবং এই সাধারণ ফাসল
                  উৎপাদনের জন্য সার হিসেবে ব্যবহার করা হয়।
                </li>
                <li className="text-lg">
                  আমরা গ্রামের বাসিন্দাদের জন্য ড্রেনেজ সিস্টেম প্রদান করি যা
                  জলস্রোত এবং পরিষ্কারক কাজে সাহায্য করে।
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tree-plantation" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">বনায়ন</h2>

            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">বনায়নের বিশদ তথ্য</h3>

              <p className="text-left text-lg">
                <strong>বনায়ন কেন গুরুত্বপূর্ণ:</strong> আমাদের পৃথিবীতে সবুজ,
                জীবন্ত এবং স্বাস্থ্যকর করার জন্য বৃক্ষরোপণ অন্যতম সেরা
                কার্যক্রম। রোপণ করা গাছ আমাদের জীববৈচিত্র্যকে সাহায্য করে,
                পরবর্তী প্রজন্মের জন্য অক্সিজেন সরবরাহ নিশ্চিত করে এবং আমাদের
                বিভিন্ন সম্পদ সরবরাহ করে। বৃক্ষ ছাড়া, মানুষের জীবনের পাশাপাশি
                পৃথিবীতে অন্যান্য প্রজাতির অস্তিত্ব অসম্ভব। তাই বেশি বেশি করে
                গাছ লাগাতে হবে।
              </p>
              <p>
                <strong>আমাদের সেবাসমূহঃ</strong>
              </p>
              <ul className="list-inside list-disc text-left">
                <li className="text-lg">
                  আমাদের গ্রামে প্রয়োজনীয় বনায়ন: [উল্লিখনীয় বনায়নের পরিমাণ
                  এবং বিশেষজ্ঞের সুপারিশ]
                </li>
                <li className="text-lg">
                  উপলব্ধ বনায়ন: [কতগুলি বৃক্ষের সংখ্যা এবং প্রজনন প্রতি বৃক্ষের
                  সংখ্যা]
                </li>
                <li className="text-lg">
                  কোন সময় আমরা বৃক্ষ লাগাতে অনুমোদিত করি: [বনায়নের সময় সূচী
                  এবং মাস]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Environment;
