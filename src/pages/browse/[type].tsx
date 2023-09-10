import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import FilterArticle from '~/components/features/browse/FilterArticle';
import FilterBook from '~/components/features/browse/FilterBook';
import FilterPanelExam from '~/components/features/browse/FilterPanelExam';
import FilterResult from '~/components/features/browse/FilterResult';
import FilterExam from '~/components/features/browse/FilterResultExam';
import Head from '~/components/shared/Head';

const BrowsePageExam: NextPage = () => {
  const router = useRouter();
  const { type } = router.query;

  // Map the type parameter to the corresponding activeIndex
  const activeIndexMap = {
    course: 1,
    exam: 2,
    article: 3,
    book: 4,
  };

  const [showFilter, setShowFilter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(activeIndexMap[type] || 1);

  return (
    <>
      <Head />

      <div className="mx-auto min-h-screen w-full px-4 md:max-w-[720px] lg:max-w-[1200px]">
        {showFilter && <FilterPanelExam />}

        <div className="flex w-full flex-row">
          <div className="flex w-full space-x-4">
            <label
              className={`flex-1 cursor-pointer rounded-lg py-4 text-center text-2xl text-gray-950 ${
                activeIndex === 1 ? 'bg-purple-700 text-white' : 'bg-slate-50'
              }`}
            >
              <input
                type="checkbox"
                checked={activeIndex === 1}
                onChange={() => {
                  setActiveIndex(1);
                }}
                className="hidden"
              />
              Course
            </label>
            <label
              className={`flex-1 cursor-pointer rounded-lg py-4 text-center text-2xl text-gray-950 ${
                activeIndex === 2 ? 'bg-purple-700 text-white' : 'bg-slate-50'
              }`}
            >
              <input
                type="checkbox"
                checked={activeIndex === 2}
                onChange={() => {
                  setActiveIndex(2);
                }}
                className="hidden"
              />
              Exam
            </label>
            <label
              className={`flex-1 cursor-pointer rounded-lg py-4 text-center text-2xl text-gray-950 ${
                activeIndex === 3 ? 'bg-purple-700 text-white' : 'bg-slate-50'
              }`}
            >
              <input
                type="checkbox"
                checked={activeIndex === 3}
                onChange={() => {
                  setActiveIndex(3);
                }}
                className="hidden"
              />
              Article
            </label>
            <label
              className={`flex-1 cursor-pointer rounded-lg py-4 text-center text-2xl text-gray-950 ${
                activeIndex === 4 ? 'bg-purple-700 text-white' : 'bg-slate-50'
              }`}
            >
              <input
                type="checkbox"
                checked={activeIndex === 4}
                onChange={() => {
                  setActiveIndex(4);
                }}
                className="hidden"
              />
              Book
            </label>
          </div>
        </div>

        {activeIndex == 1 && <FilterResult />}
        {activeIndex == 2 && <FilterExam />}
        {activeIndex == 3 && <FilterArticle />}
        {activeIndex == 4 && <FilterBook />}
      </div>
    </>
  );
};

export default BrowsePageExam;
