import Image from 'next/image';
import Head from '~/components/shared/Head';

export default function AboutUS() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="flex flex-col items-center justify-center p-6 py-12">
        <div className="w-full lg:w-4/5">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="py-8 text-2xl">
            MPBIAN{"'"}s mission is to improve lives through learning. We enable
            anyone, anywhere to access educational content and learn. We
            consider our marketplace model the best way to offer valuable
            educational content to our users. These Terms apply to all your
            activities on the MPBIAN.com website, the mobile applications, our
            TV applications, our APIs, and other related services.
          </p>
          <p className="font-bold">Trade license No: 104108</p>
        </div>

        <div className="mt-12 w-full text-center lg:w-4/5">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
        </div>

        <div>
          <div className="mt-8 flex w-full flex-col items-center gap-3 lg:flex-row">
            <div className="flex w-full flex-grow flex-col items-center rounded-lg bg-gray-300 p-4  dark:bg-slate-900">
              <Image
                alt="course-thumbnail"
                src="/images/pahlovi.png"
                height={100}
                width={100}
                className="h-28 w-28 rounded-full"
              />
              <div className="mt-4 flex flex-col text-center">
                <span className="text-2xl font-bold">Md. Mottasin Pahlovi</span>
                <span>Chairman and Founder</span>
              </div>
            </div>

            <div className="flex  w-full flex-grow flex-col items-center rounded-lg bg-gray-300 p-4  dark:bg-slate-900">
              <Image
                alt="course-thumbnail"
                src="/images/koli.jpeg"
                height={100}
                width={100}
                className="h-28 w-28 rounded-full"
              />
              <div className="mt-4 flex flex-col text-center">
                <span className="text-2xl font-bold">
                  Mst. Kashphia Akter Koli
                </span>
                <span>Managing Director</span>
              </div>
            </div>
          </div>

          <div className="mx-1 my-6 flex w-full flex-col gap-3">
            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Saidus Zaman</span>
                <span>Senior Writter</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="course-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Rasedul Islam Juwel</span>
                <span>Manager</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Abu Sayem</span>
                <span>Senior Executive</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Hannan Miaze</span>
                <span>Lead Computer Operator and Content Head</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Sazzad Hossain Sumon</span>
                <span>Lead Writter</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Omor Faruk</span>
                <span>Computer Operator</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Sajeeb Saha</span>
                <span>Computer Operator</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="https://avatars.githubusercontent.com/u/29326759?v=4"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Jahangir Hossain</span>
                <span>Software Developer and Content Designer</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Sazzad Kabir</span>
                <span>Accountiong and Maintanance</span>
              </div>
            </div>

            <div className="flex flex-grow flex-row items-center rounded-lg bg-gray-300 px-4 py-3 dark:bg-slate-900">
              <Image
                alt="jhm69-thumbnail"
                src="/icons/android-chrome-192x192.png"
                height={60}
                width={60}
                className="h-16 w-16 rounded-full"
              />
              <div className="mx-3 flex flex-col ">
                <span className="text-2xl font-bold">Al Mahmud</span>
                <span>Creative Writter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
