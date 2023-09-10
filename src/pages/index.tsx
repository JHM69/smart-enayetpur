import type { Category, Review } from '@prisma/client';
import type { GetStaticProps, NextPage } from 'next';
import Achievement from '~/components/partials/Achievement';
import Container from '~/components/shared/Container';
import { prisma } from '~/server/db/client';
import Head from '~/components/shared/Head';
import Search from '~/components/shared/Search';

interface HomePageProps {
  topCategories: Category[];
  latestReviews: (Review & {
    Course: {
      slug: string;
    } | null;
  })[];
  totalCourses: number;
  totalTests: number;
  totalQuestions: number;
  totalStudents: number;
  totalInstructors: number;
  totalBooks: number;
  totalArticles: number;
}

const Home: NextPage<HomePageProps> = ({
  topCategories,
  totalCourses,
  totalTests,
  totalQuestions,
  totalStudents,
  totalBooks,
  totalArticles,
}) => {
  return (
    <>
      <Head />

      {/* <div className="relative z-40 mx-auto mt-4 h-fit w-[95%] md:hidden">
        <Search />
      </div> */}

      {/* <Container>
        <PopularCourses />
      </Container> */}

      <Container>
        <div
          className="hero bg-cover bg-center py-20 text-center"
          style={{
            backgroundImage: `url(https://i.ibb.co/8DVZY8b/bg.jpg)`, // Use the updated image URL
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
          }}
        >
          <div className="container mb-96">
            <h1 className="mb-4 text-6xl font-bold text-gray-900 ">
              এনায়েতপুর সিরাজগঞ্জ স্মার্ট গ্রামে আপনাকে স্বাগতম
            </h1>
            <p className="mb-4 text-2xl  text-gray-900 ">
              ডিজিটাল সমাধানের মাধ্যমে সম্প্রদায়কে শক্তিশালী করুন
            </p>
            <a
              href="#solution-scope"
              className="rounded-full bg-gray-800 px-6 py-2 text-2xl text-white transition duration-300 ease-in-out hover:bg-gray-600"
            >
              শুরু করুন
            </a>
          </div>
        </div>

        <div className="solution-scope bg-white py-10">
          <h1 className="mb-4 text-center  text-2xl font-bold">
            আমাদের সুবিধাসমুহ
          </h1>
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">
                ডিজিটাল কৃষি এবং খাবার নিরাপত্তা
              </h2>
              <p className="text-lg">
                স্বাগতম! আমরা ডিজিটাল কৃষি এবং খাবার নিরাপত্তা সেবা সরবরাহ করছি।
                আমাদের সেবাগুলি মাধ্যমে আপনি আপনার কৃষি প্রযুক্তির সাথে
                সম্পৃক্ষে থাকতে পারেন, আবহাওয়া পূর্বানুমান পেতে পারেন, মাটির
                বিশ্লেষণ করতে পারেন এবং সম্প্রদায়ের কৃষকদের সাথে যোগাযোগ করতে
                পারেন। আমরা খাবারের নিরাপত্তা সম্প্রদায়কে নিশ্চিত করতে সাহায্য
                করে স্মার্ট কৃষি অ্যাপ্লিকেশন ও তথ্য প্রযুক্তি প্রদান করি।
              </p>
            </div>

            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">
                ডিজিটাল শিক্ষা সিস্টেম
              </h2>
              <p className="text-lg">
                আমরা ডিজিটাল শিক্ষা সিস্টেম সেবা সরবরাহ করছি, যা ছাত্রদের
                শিক্ষার জন্য প্রয়োজনীয় সব সরকারী এবং প্রাইভেট পাঠ্যমালা,
                শিক্ষক প্রশিক্ষণ প্রোগ্রাম এবং ডিজিটাল ডিভাইসের সাথে একটি
                ডিজিটাল শিক্ষা পোর্টাল সরবরাহ করে। আমরা শিক্ষার্থীদের উন্নত
                শিক্ষা সরবরাহ করতে সাহায্য করি, শিক্ষকদের প্রশিক্ষণ দেওয়ার
                সুযোগ প্রদান করি এবং সস্তা বা সাবসিডাইজড ডিজিটাল ডিভাইস উপলব্ধ
                করাই আমাদের লক্ষ্য।
              </p>
            </div>

            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">
                ডিজিটাল স্বাস্থ্য সেবা
              </h2>
              <p className="text-lg">
                স্বাস্থ্য সেবা আমাদের প্রাথমিক স্বাস্থ্য সেবা পরিচালনা,
                টেলিমেডিসিন প্ল্যাটফর্ম, এবং স্বাস্থ্য শিক্ষা সেবা সরবরাহের জন্য
                একটি ডিজিটাল সেবা। আমরা গ্রামীণ বাসীদের দূরবর্তী চিকিৎসা প্রদান
                করি, টেলিমেডিসিন প্ল্যাটফর্ম তৈরি করে ডাক্তারের সাথে যোগাযোগ এবং
                মোবাইল অ্যাপ্লিকেশন দিয়ে স্বাস্থ্য রেকর্ড ম্যানেজমেন্ট সম্ভব
                করি।
              </p>
            </div>

            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">ডিজিটাল যানবাহন</h2>
              <p className="text-lg">
                আমরা ডিজিটাল যানবাহন সেবা সরবরাহ করছি, যাতে গ্রামীণ যানবাহন
                পরিচালনার জন্য স্মার্ট সমাধান প্রদান করা হয়। আমরা মোবাইল
                অ্যাপ্লিকেশন ডিভেলপ করে যানবাহন সেবা উন্নত করি এবং গ্রামীণ
                এলাকায় যানবাহন দ্বারা পৌরস্ত্র সেবা প্রদান করি।
              </p>
            </div>

            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">দুর্যোগ সতর্কতা</h2>
              <p className="text-lg">
                আমরা দুর্যোগ সতর্কতা সেবা সরবরাহ করছি, যাতে দুর্যোগের সময়
                সঠিক তথ্য এবং সতর্কতা প্রদান করা যায়। আমরা বিশেষজ্ঞ পরামর্শ
                সরবরাহ করে সঠিক দুর্যোগ প্রবন্ধনার সাথে সাহায্য করি, সতর্কতা
                সংক্রান্ত তথ্য প্রদান করি সম্প্রদায়ের সদস্যদের জন্য, এবং
                দুর্যোগের সময় প্রাথমিক সাহায্য পৌঁছানো সাহায্য করি।
              </p>
            </div>
            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">সরকারি সেবা</h2>
              <p className="text-lg">
                সরকারি সেবাগুলির সহজ অ্যাক্সেস এবং তথ্য প্রদানের সাথে সাহায্য
                করছি। নিম্নলিখিত সেবাগুলির জন্য আমরা আপনার পাশে আছি।
              </p>
            </div>

            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">পরিবেশ বার্তা</h2>
              <p className="text-lg">
                পরিবেশের সমস্যাগুলি সম্পর্কে তথ্য এবং সমাচারের জন্য আমরা একটি
                সুস্থ প্ল্যাটফর্ম প্রদান করি।
              </p>
            </div>

            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">
                গ্রামীণ উদ্যোগ ও অর্থনীতি
              </h2>
              <p className="text-lg">
                গ্রামীণ উদ্যোগ ও অর্থনীতি সেবাগুলির মাধ্যমে আমরা আপনার অর্থনীতি
                উন্নত করতে সাহায্য করি।
              </p>
            </div>
            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">গ্রামীণ সম্প্রদায়</h2>
              <p className="text-lg">
                গ্রামীণ সম্প্রদায়ের সাথে যোগাযোগ এবং সামাজিক সেবাগুলি সরবরাহের
                জন্য আমরা উপলব্ধ আছি।
              </p>
            </div>
            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">প্রয়োজনীয় সেবা</h2>
              <p className="text-lg">
                দরকারী সেবাগুলির সহজ অ্যাক্সেস এবং তথ্য সরবরাহ করতে আমরা আপনার
                পাশে আছি।
              </p>
            </div>
            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">দক্ষতা ও কর্ম</h2>
              <p className="text-lg">
                দক্ষতা এবং কর্ম সম্পর্কে তথ্য এবং সমর্থন প্রদানের মাধ্যমে আমরা
                নোকরী ও বেতনবাজির সুযোগ সৃষ্টি করতে সাহায্য করি।
              </p>
            </div>
            <div className="solution-box mb-6 border border-gray-200 p-6 shadow-md md:w-1/2 lg:w-1/3">
              <h2 className="mb-3 text-2xl font-bold">সাংস্কৃতিক সংরক্ষণ</h2>
              <p className="text-lg">
                আমরা আমাদের সাংস্কৃতিক সম্পদ এবং ঐতিহ্য সংরক্ষণে সাহায্য করি এবং
                সাংস্কৃতিক কর্মসূচিগুলি সমর্থন প্রদান করি।
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* <Achievement
        totalCourses={12}
        totalTests={12}
        totalQuestions={21}
        totalStudents={1233423}
        totalBooks={22}
        totalArticles={3}
      /> */}

      {/* <Banner /> */}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const [
    topCategories,
    totalCourses,
    totalTests,
    totalQuestions,
    totalStudents,
    totalBooks,
    totalArticles,
    latestReviews,
  ] = await prisma.$transaction([
    prisma.course.findMany({
      where: { students: { some: { id: { not: undefined } } } },
      select: {
        category: true,
      },
      distinct: ['categoryId'],
      take: 4,
      orderBy: { students: { _count: 'desc' } },
    }),
    prisma.course.count({
      where: { verified: 'APPROVED' },
    }),
    prisma.test.count(),
    prisma.question.count(),
    prisma.user.count(),
    prisma.book.count(),
    prisma.article.count(),
    prisma.review.findMany({
      take: 8,
      orderBy: { createdAt: 'desc' },
      include: { Course: { select: { slug: true } }, author: true },
    }),
  ]);

  return {
    props: {
      topCategories: topCategories.map((e) => e.category),
      totalCourses,
      totalTests,
      totalQuestions,
      totalStudents,
      totalBooks,
      totalArticles,
      latestReviews: JSON.parse(JSON.stringify(latestReviews)),
    },
    revalidate: 60 * 60 * 6,
  };
};

export default Home;
