// components/Weather.js

const Social = () => {
  return (
    <div className="m-5 flex flex-col">
      <h2 className="my-4 mb-4 text-center text-3xl font-bold">
        পরিবহন সমূহের তালিকা
      </h2>
      <section className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">বাসের তালিকা</h2>
        <table className="w-full table-auto text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">বাসের নাম</th>
              <th className="px-4 py-2">রুট</th>
              <th className="px-4 py-2">টাকা মূল্য</th>
              <th className="px-4 py-2">সময় সূচি</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">অভি এন্টারপ্রাইজ</td>
              <td className="border px-4 py-2">এনায়েতপুর - ঢাকা</td>
              <td className="border px-4 py-2">১৫০০ টাকা</td>
              <td className="border px-4 py-2">সকাল ৯:০০ AM - রাত ১০:০০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">সিলাইন</td>
              <td className="border px-4 py-2">এনায়েতপুর - ঢাকা</td>
              <td className="border px-4 py-2">১২০০ টাকা</td>
              <td className="border px-4 py-2">সকাল ১০:৩০ AM - রাত ১১:৩০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">সোনারগাঁ পরিবহন</td>
              <td className="border px-4 py-2">এনায়েতপুর - সোনারগাঁ</td>
              <td className="border px-4 py-2">১২০০ টাকা</td>
              <td className="border px-4 py-2">সকাল ১১:০০ AM - রাত ১২:০০ AM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">বরিশাল পরিবহন</td>
              <td className="border px-4 py-2">এনায়েতপুর - বরিশাল</td>
              <td className="border px-4 py-2">১৫৫০ টাকা</td>
              <td className="border px-4 py-2">সকাল ১০:০০ AM - রাত ১১:৩০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">খুলনা পরিবহন</td>
              <td className="border px-4 py-2">এনায়েতপুর - খুলনা</td>
              <td className="border px-4 py-2">১৩৫০ টাকা</td>
              <td className="border px-4 py-2">সকাল ৯:৩০ AM - রাত ১০:৩০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">ট্রেনের তালিকা</h2>
        <table className="w-full table-auto text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">ট্রেনের নাম</th>
              <th className="px-4 py-2">রুট</th>
              <th className="px-4 py-2">টাকা মূল্য</th>
              <th className="px-4 py-2">সময় সূচি</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">পদ্মা এক্সপ্রেস</td>
              <td className="border px-4 py-2">এম মনসুর আলি - ঢাকা</td>
              <td className="border px-4 py-2">৮০০ টাকা</td>
              <td className="border px-4 py-2">সকাল ৮:০০ AM - রাত ১০:০০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">তুরাগ এক্সপ্রেস</td>
              <td className="border px-4 py-2">এম মনসুর আলি - ঢাকা</td>
              <td className="border px-4 py-2">৬০০ টাকা</td>
              <td className="border px-4 py-2">সকাল ৯:৩০ AM - রাত ১১:৩০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">জামালপুর এক্সপ্রেস</td>
              <td className="border px-4 py-2">এম মনসুর আলি - জামালপুর</td>
              <td className="border px-4 py-2">৫৫০ টাকা</td>
              <td className="border px-4 py-2">সকাল ১০:০০ AM - রাত ১২:০০ AM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">মহানন্দা এক্সপ্রেস</td>
              <td className="border px-4 py-2">এম মনসুর আলি - রংপুর</td>
              <td className="border px-4 py-2">৭৫০ টাকা</td>
              <td className="border px-4 py-2">সকাল ৯:০০ AM - রাত ১১:০০ PM</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  টিকেট বুক করুন
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Social;
