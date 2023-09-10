// components/Weather.js

const Social = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full p-4 md:w-1/3">
        <div className="solution-box flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div>
            <img
              src="https://www.uddoktarkhoje.com/wp-content/uploads/2018/12/341209_150-e1545287764805.jpg"
              alt="water"
              className="mx-auto h-64 w-full"
            />
          </div>
          <h3 className="m-2 text-xl font-bold">কম্পিউটার প্রশিক্ষণ</h3>
          <p className="flex-grow text-base text-gray-700">
            উন্নয়ন ও তথ্য যোগাযোগ প্রযুক্তির উন্নতির সাথে তাল রেখে চলতে গিয়ে
            বর্তমানে কম্পিউটার শিক্ষার গুরুত্ব অপরিহার্য হয়ে পড়েছে। এজন্য,
            শিক্ষিত যুব সমাজের ছেলে মেয়েরা স্কুল, কলেজ এবং বিশ্ববিদ্যালয়ে
            পড়াশোনা চলাকালীন সময়েই বিভিন্ন কম্পিউটার প্রশিক্ষণ কোর্সে ভর্তি হয়ে,
            উক্ত খাতে তাদের দক্ষতাকে সমৃদ্ধ করছে।
          </p>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/3">
        <div className="solution-box flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div>
            <img
              src="https://bd24report.com/bangla/wp-content/uploads/2019/10/27-5.jpg"
              alt="sewing"
              className="mx-auto h-64 w-full"
            />
          </div>
          <h3 className="m-2 text-xl font-bold">সেলাই মেশিন প্রশিক্ষণ</h3>
          <p className="flex-grow text-base text-gray-700">
            আমরা সেলাই মেশিন প্রশিক্ষণ সেবা সরবরাহ করি যা আপনাকে সেলাই মেশিন
            পেশায় উন্নত করতে সাহায্য করতে সক্ষম করে।
          </p>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/3">
        <div className="solution-box flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
          <div>
            <img
              src="https://www.kalerkantho.com/_next/image?url=http%3A%2F%2Fcdn.kalerkantho.com%2Fpublic%2Fnews_images%2F2021%2F01%2F13%2F171626agriculture-krisi.jpg&w=1920&q=100"
              alt="agriculture"
              className="mx-auto h-64 w-full"
            />
          </div>
          <h3 className="m-2 text-xl font-bold">কৃষি প্রশিক্ষণ</h3>
          <p className="flex-grow text-base text-gray-700">
            আমরা কৃষি প্রশিক্ষণ সেবা সরবরাহ করি যা আপনাকে কৃষিকাজ করতে সাহায্য
            করতে সক্ষম করে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
