// components/Weather.js

const Social = () => {
  return (
    <div className="rounded-lg p-12 shadow-md">
      <section id="social_network" className="bg-gray-100 py-8">
        <div className="container mx-auto rounded-lg bg-white p-4 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">সামাজিক নেটওয়ার্ক</h2>
          <div>
            <p>
              এই সেকশনে, প্রতিটি ব্যক্তি একটি নেটওয়ার্ক মাধ্যমে তাদের চিন্তা
              সাঝাতে পারে এবং সামাজিক সমস্যা নিয়ে আলোচনা করতে পারেন।
            </p>
          </div>
        </div>
      </section>

      <section id="work_transparency" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">কাজের স্বচ্ছতা</h2>

            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-300">
                  <th className="px-4 py-2 font-medium">কাজের নাম</th>
                  <th className="px-4 py-2 font-medium">সময়কাল</th>
                  <th className="px-4 py-2 font-medium">বাজেট</th>
                  <th className="px-4 py-2 font-medium">ব্যয়</th>
                  <th className="px-4 py-2 font-medium">অবশিষ্ট মূল্য</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-normal">
                    পাকা সড়ক নির্মাণ
                  </td>
                  <td className="border px-4 py-2 font-normal">২০২৩-২০২৪</td>
                  <td className="border px-4 py-2 font-normal">৳ ১০,০০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ৯,৫০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ৫০,০০০</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-normal">
                    প্রাথমিক স্কুল নির্মাণ
                  </td>
                  <td className="border px-4 py-2 font-normal">২০২২-২০২৩</td>
                  <td className="border px-4 py-2 font-normal">৳ ৮,৫০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ৭,৮০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ৭০,০০০</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-normal">
                    ড্রেনেজ সিস্টেম নির্মাণ
                  </td>
                  <td className="border px-4 py-2 font-normal">২০২৪-২০২৫</td>
                  <td className="border px-4 py-2 font-normal">৳ ১২,০০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ১১,৫০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ৫০,০০০</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 font-normal">বাঁধ নির্মাণ</td>
                  <td className="border px-4 py-2 font-normal">২০২৪-২০২৫</td>
                  <td className="border px-4 py-2 font-normal">৳ ১,০০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ৯০,০০০</td>
                  <td className="border px-4 py-2 font-normal">৳ ১০,০০০</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="virtual_meeting" className="bg-gray-100 py-8">
        <div className="container mx-auto rounded-lg bg-white p-4 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">ভার্চুয়াল মিটিং</h2>
          <div>
            <p>
              এই সেকশনে, সামাজিক কর্মকাণ্ডে, সামাজিক সমস্যা নিয়ে আলোচনা করতে
              এবং ভার্চুয়াল মিটিং করতে পারেন। নীচের তালিকা সম্পর্কে আপনার
              আলোচনা করা হয়:
            </p>
            <div className="mt-4">
              <h3 className="mb-2 text-xl font-semibold">সময়সূচী:</h3>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="px-4 py-2">মিটিং নাম</th>
                    <th className="px-4 py-2">বিস্তারিত</th>
                    <th className="px-4 py-2">সময়</th>
                    <th className="px-4 py-2">মিটিং লিঙ্ক</th>
                    <th className="px-4 py-2">যোগ দিন</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">সাপ্তাহিক মিটিং</td>
                    <td className="border px-4 py-2">
                      সামাজিক কর্মকাণ্ডে সাপ্তাহিক আলোচনা
                    </td>
                    <td className="border px-4 py-2">
                      সোমবার, সন্ধ্যায়, ৭:০০ টা
                    </td>
                    <td className="border px-4 py-2">
                      <a href="#">মিটিং লিঙ্ক</a>
                    </td>
                    <td className="border px-4 py-2">
                      <a
                        href="#"
                        className="my-2 rounded bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                      >
                        যোগ দিন
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">দ্বাসপ্তাহিক মিটিং</td>
                    <td className="border px-4 py-2">
                      সামাজিক কর্মকাণ্ডে দ্বাসপ্তাহিক আলোচনা
                    </td>
                    <td className="border px-4 py-2">
                      বুধবার, সন্ধ্যায়, ৬:৩০ টা
                    </td>
                    <td className="border px-4 py-2">
                      <a href="#">মিটিং লিঙ্ক</a>
                    </td>
                    <td className="border px-4 py-2">
                      <a
                        href="#"
                        className="my-2 rounded bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                      >
                        যোগ দিন
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">মাসিক মিটিং</td>
                    <td className="border px-4 py-2">
                      সামাজিক কর্মকাণ্ডে মাসিক আলোচনা
                    </td>
                    <td className="border px-4 py-2">
                      শনিবার, সন্ধ্যায়, ৭:০০ টা
                    </td>
                    <td className="border px-4 py-2">
                      <a href="#">মিটিং লিঙ্ক</a>
                    </td>
                    <td className="border px-4 py-2">
                      <a
                        href="#"
                        className="my-2 rounded bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                      >
                        যোগ দিন
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
