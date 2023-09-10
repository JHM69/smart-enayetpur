// components/Weather.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDayCloudy } from 'react-icons/wi'; // Replace this with the appropriate weather icons

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataAll, setWeatherDataAll] = useState([]);
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

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=24.224800496297945&lon=89.69691020893062&appid=a23b62aef63afcdf71421a730435c76b`,
        );

        if (response.status === 200) {
          setWeatherData(response.data);
        } else {
          console.error('Error fetching weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    }

    fetchWeatherData();
  }, []);

  useEffect(() => {
    async function fetchWeatherDataAll() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/daily?lat=24.224800496297945&lon=89.69691020893062&cnt=7&appid=a23b62aef63afcdf71421a730435c76b`,
        );

        console.log(response.data);

        if (response.status === 200) {
          setWeatherDataAll(response.data);
        } else {
          console.error('Error fetching weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    }

    fetchWeatherDataAll();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  function formatFloat(number: number): string {
    // Use the toFixed method to round the number to 2 decimal places
    const formattedNumber = number.toFixed(2);
    return convertToBengaliNumber(formattedNumber);
  }

  return (
    <div className="rounded-lg p-12 shadow-md">
      <div className="flex items-center">
        {/* <p className="text-xl">{weatherData?.weather[0]?.description}</p>
      </div>
      <p className="mt-4 text-xl">Temperature: {weatherData?.main.temp}°C</p>
      <p className="text-xl">Feels Like: {weatherData?.main.feels_like}°C</p>
      <p className="text-xl">Humidity: {weatherData?.main.humidity}%</p>
      <p className="text-xl">Pressure: {weatherData?.main.pressure} hPa</p>
      <p className="text-xl">Wind Speed: {weatherData?.wind.speed} m/s</p> */}
      </div>

      <section id="weather-forecast" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-2xl font-semibold">বর্তমান আবহাওয়া</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <p className="mb-4 text-2xl font-bold">
                {formatFloat(weatherData?.main.temp - 273)} ডিগ্রি সেলসিয়াস
              </p>
              <div className="flex items-center">
                {' '}
                {/* Added this div with flex */}
                <WiDayCloudy className="mr-2 text-4xl" />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="mb-2 justify-center text-center text-xl font-semibold">
                    বর্তমান আবহাওয়া
                  </h3>
                  <span> {weatherData?.weather[0]?.description}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">বায়ুর গতি</h3>
              <p className="mb-4 text-2xl font-bold">
                {' '}
                {convertToBengaliNumber(weatherData?.wind.speed)} কি.মি./ঘণ্টা
              </p>
              <p className="text-gray-600">উত্তর-পশ্চিম দিকে বায়ুর গতি</p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">আর্দ্রতা</h3>
              <p className="mb-4 text-2xl font-bold">
                {convertToBengaliNumber(weatherData?.main.humidity)}%
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">বায়ুচাপ</h3>
              <p className="mb-4 text-2xl font-bold">
                {convertToBengaliNumber(weatherData?.main.pressure)} hPa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="weather-forecast" className="bg-gray-100 py-8">
        <ul>
          {weatherDataAll.list.map((day, index) => (
            <li key={index}>
              <h3>Date: {new Date(day.dt * 1000).toLocaleDateString()}</h3>
              <p>তাপমাত্রা: {day.temp.day}°C</p>
              <p>সর্বনিম্ন তাপমাত্রা: {day.temp.min}°C</p>
              <p>সর্বোচ্চ তাপমাত্রা: {day.temp.max}°C</p>
              <p>পুর্বাভাস: {day.weather[0].description}</p>
            </li>
          ))}
        </ul>
      </section> */}

      <section id="soil-analysis" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-2xl font-semibold">মাটি বিশ্লেষণ রিপোর্ট</h2>
          <div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                মাটি ভৌতিক বিশ্লেষণ
              </h3>
              <table className="table-auto border-collapse border border-gray-400">
                <tr className="border">
                  <td className="border">
                    <strong>মাটি টেক্সচার:</strong>
                  </td>
                  <td className="border">
                    মাটির স্যান্ড, সিল্ট, এবং ক্লে কণিকা অনুপাত নির্দিষ্ট করে।
                  </td>
                </tr>
                <tr className="border">
                  <td className="border">
                    <strong>স্যান্ডি মাটি:</strong>
                  </td>
                  <td className="border">
                    সর্বশ্রেষ্ঠ পানি নির্ভরণ ক্ষমতা সাথে স্যান্ডি মাটি, কিন্তু
                    এটির পোষণ উপাদানের সীমিত আছে এবং পুরোনো বিষাণ সামগ্রী
                    ন্যূনতম রয়েছে।
                  </td>
                </tr>
                <tr className="border">
                  <td className="border">
                    <strong>সিল্ট মাটি:</strong>
                  </td>
                  <td className="border">
                    স্যান্ডি মাটির চেয়ে উর্বরতর এবং পানি ধরার দক্ষতা সিল্ট
                    মাটিতে আছে।
                  </td>
                </tr>
                <tr className="border">
                  <td className="border">
                    <strong>ক্লে মাটি:</strong>
                  </td>
                  <td className="border">
                    পানি ধারণ করার দিক থেকে ক্লে মাটি সর্বোত্তম, কিন্তু এটি
                    পুরোনো সামগ্রীগুলি মধ্যে ড্রেন করে না।
                  </td>
                </tr>
                <tr className="border">
                  <td className="border">
                    <strong>
                      কৃষকরা পছন্দ করে লোম মাটি (যা কৃষিমূল্য মাটি হিসেবেও
                      পরিচিত):
                    </strong>
                  </td>
                  <td className="border">
                    এটি অন্য তিনটি ধরনের গুণগুলির উপকারী গুণ রেখে থাকে। লোম মাটি
                    আরও উভয়নঃন রাখে, পোষণ, এবং হিউমাস।
                  </td>
                </tr>
                <tr className="border">
                  <td className="border">
                    <strong>হিউমাস:</strong>
                  </td>
                  <td className="border">
                    মাটিতে গুঁড়িয়ে দেওয়া গোলাপ প্ল্যান্ট এবং প্রাণী পদার্থের
                    অবশেষ পরিবর্তনের মাধ্যমে গুণগত পোষণের একটি কারণ, এটি মাটির
                    স্বাস্থ্য এবং পোষণ বাড়াতে সাহায্য করে। এটি প্রায় 60%
                    কার্বন, এবং নাইট্রোজেন, ফসফরাস, এবং সালফার সহ অন্যান্য
                    দরকারি পোষণাত্মক উপাদান ধারণ করে।
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="online-market" className="bg-blue-900 py-12 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-semibold">অনলাইন মার্কেট</h2>
          <p className="text-lg leading-relaxed">
            স্বাগতম অনলাইন মার্কেটে! এই মার্কেটে আপনি পাচ্ছেন আপনার সব
            প্রয়োজনীয় কৃষিপণ্য সুলভ মূল্যে।
          </p>
          <div className="mt-8">
            <a
              href="/agri_platform"
              className="border-b border-blue-300 text-blue-300 transition duration-300 hover:border-blue-400 hover:text-blue-400"
            >
              কৃষি পণ্যসমূহ দেখুন
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weather;
