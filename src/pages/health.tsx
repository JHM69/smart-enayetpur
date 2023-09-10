// components/Weather.js

const Social = () => {
  return (
    <div>
      <section className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold">
          আমাদের ডাক্তারসমূহ
        </h2>
        <h2 className="mb-4 text-2xl font-bold">ডাক্তারের তালিকা</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">নাম</th>
              <th className="px-4 py-2">বিশেষজ্ঞতা</th>
              <th className="px-4 py-2">চেম্বার ঠিকানা</th>
              <th className="px-4 py-2">উপস্থিতি সময়</th>
              <th className="px-4 py-2">যোগাযোগ</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">ডাক্তার আহমেদ</td>
              <td className="border px-4 py-2">মানসিক স্বাস্থ্য</td>
              <td className="border px-4 py-2">
                খাজা ইউনুস আলী মেডিকেল কলেজ ও হাসপাতাল, সিরাজগঞ্জ, বাংলাদেশ
              </td>
              <td className="border px-4 py-2">
                সোমবার - শুক্রবার, 9:00 AM - 5:00 PM
              </td>
              <td className="border px-4 py-2">ফোন: 123-456-7890</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  আপয়ন্টমেন্ট করুন
                </a>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">ডাক্তার খান</td>
              <td className="border px-4 py-2">হৃদরোগ</td>
              <td className="border px-4 py-2">
                খাজা ইউনুস আলী মেডিকেল কলেজ ও হাসপাতাল, সিরাজগঞ্জ, বাংলাদেশ
              </td>
              <td className="border px-4 py-2">
                সোমবার - শুক্রবার, 10:00 AM - 6:00 PM
              </td>
              <td className="border px-4 py-2">ফোন: 987-654-3210</td>
              <td className="border px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  আপয়ন্টমেন্ট করুন
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold">
          অন্যান্য সেবাসমূহ
        </h2>
        <div className="flex">
          <div className="mr-2 w-1/2 rounded-lg bg-gray-100 p-4 shadow-lg">
            <h3 className="mb-2 text-lg font-bold">শয্যাশায়ী সুবিধা</h3>
            <p className="text-gray-700">
              আমরা আমাদের প্রতিষ্ঠানে শয্যাশায়ী সুবিধা সরবরাহ করি যা আপনার আরাম
              এবং সুখের জন্য উন্নত করতে সাহায্য করে। আমরা নিয়মিত চাকরির দিনে
              আমাদের মারাত্মক ডাক্তারের দেখাদেখি দিচ্ছি যেখানে আপনি আপনার
              স্বাস্থ্য সমস্যা সম্পর্কে পরামর্শ এবং চিকিৎসা প্রাপ্ত করতে পারেন।
            </p>
            <p>যোগাযোগঃ +০১২৩৪৫৬৭৮৯</p>
          </div>
          <div className="ml-2 w-1/2 rounded-lg bg-gray-100 p-4 shadow-lg">
            <h3 className="mb-2 text-lg font-bold">অ্যাম্বুলেন্স সেবা</h3>
            <p className="text-gray-700">
              আমরা আমাদের প্রতিষ্ঠানে স্থানীয় অ্যাম্বুলেন্স সেবা প্রদান করি।
              আমরা আপনার দুর্যোগের সময় আম্বুলেন্স প্রেরণ করতে সাহায্য করতে
              আগ্রহী এবং সহানুভূতির সাথে সেবা প্রদান করি।
            </p>
            <p>অ্যাম্বুলেন্স বুক করতে যোগাযোগ করুন +০১২৩৪৫৬৭৮৯ নম্বরে।</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
