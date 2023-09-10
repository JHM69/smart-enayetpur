const Kutir = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <img
            src="https://images.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2016%2F04%2F11%2Ff5266be4660678c1e09601805f9c9a99-12.jpg?auto=format%2Ccompress&w=376&dpr=2.6"
            alt="Product 1"
            className="mb-2 rounded-lg"
            width="300"
            height="200"
          />
          <h3 className="mb-2 text-lg font-semibold">মৃৎশিল্প</h3>
          <p>মাটির হাড়ি-পাতিল বা জিনিসপত্র তৈরি।</p>
          <a href="#" className="text-blue-500 hover:underline">
            বিস্তারিত দেখুন
          </a>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <img
            src="https://www.u71news.com/article_images/2015/04/09/09-04-2015NP2.jpg"
            alt="Product 2"
            className="mb-2 rounded-lg"
            width="300"
            height="200"
          />
          <h3 className="mb-2 text-lg font-semibold">কাঠ শিল্প</h3>
          <p>কাঠের মিস্ত্রির আসবাবপত্র তৈরি গৃহ নির্মাণ ইত্যাদি।</p>
          <a href="#" className="text-blue-500 hover:underline">
            বিস্তারিত দেখুন
          </a>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <img
            src="https://assets.telegraphindia.com/abp/2021/Apr/1618101082_goldsmith.jpg"
            alt="Product 2"
            className="mb-2 rounded-lg"
            width="300"
            height="200"
          />
          <h3 className="mb-2 text-lg font-semibold">স্বর্ণের কারিগর</h3>
          <p> সোনার গহনা তৈরি।</p>
          <a href="#" className="text-blue-500 hover:underline">
            বিস্তারিত দেখুন
          </a>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <img
            src="https://images.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2017%2F08%2F27%2Fb81a672c718fd8e53820b00e8157aef7-59a1d94c78ef3.jpg?auto=format%2Ccompress&w=1200"
            alt="Product 2"
            className="mb-2 rounded-lg"
            width="300"
            height="200"
          />
          <h3 className="mb-2 text-lg font-semibold">কামার শিল্প</h3>
          <p>দা, কাঁচি, হাতুড়ি বানানো।</p>
          <a href="#" className="text-blue-500 hover:underline">
            বিস্তারিত দেখুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kutir;
