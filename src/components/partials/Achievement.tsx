import { MdPeopleOutline, MdQuestionMark } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { CountUp } from 'use-count-up';
import { BiBook, BiNote, BiTestTube } from 'react-icons/bi';

interface AchievementProps {
  totalCourses: number;
  totalTests: number;
  totalQuestions: number;
  totalStudents: number;
  totalBooks: number;
  totalArticles: number;
}

export default function Achievement({
  totalCourses,
  totalTests,
  totalQuestions,
  totalStudents,
  totalBooks,
  totalArticles,
}: AchievementProps) {
  return (
    <div className=" mx-6 my-12">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-3">
        <div className="flex items-center space-x-4 rounded-lg bg-blue-800 p-8 text-white">
          <SiGoogleclassroom className="h-12 w-12" />
          <div>
            <div className="text-5xl font-bold">
              <CountUp
                isCounting
                end={Number.isFinite(totalCourses) ? totalCourses : 0}
                duration={1.5}
              />
            </div>
            <p className="text-xl">টি শিক্ষনীয় কোর্স</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 rounded-lg bg-slate-700 p-8 text-white">
          <MdQuestionMark className="h-12 w-12" />
          <div>
            <div className="text-5xl font-bold">
              <CountUp
                isCounting
                end={Number.isFinite(totalQuestions) ? totalQuestions : 0}
                duration={1.5}
              />
            </div>
            <p className="text-xl">অনলাইন সেবা</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 rounded-lg bg-indigo-800 p-8 text-white">
          <MdPeopleOutline className="h-12 w-12" />
          <div>
            <div className="text-5xl font-bold">
              <CountUp
                isCounting
                end={Number.isFinite(totalStudents) ? totalStudents : 0}
                duration={1.5}
              />
            </div>
            <p className="text-xl">জনসংখ্যা</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 rounded-lg bg-blue-800 p-8 text-white">
          <BiNote className="h-12 w-12" />
          <div>
            <div className="text-5xl font-bold">
              <CountUp
                isCounting
                end={Number.isFinite(totalArticles) ? totalArticles : 0}
                duration={1.5}
              />
            </div>
            <p className="text-xl">ব্লগ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
