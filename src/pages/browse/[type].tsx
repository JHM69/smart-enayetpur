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

  // // Map the type parameter to the corresponding activeIndex
  // const activeIndexMap = {
  //   course: 1,
  //   exam: 2,
  //   article: 3,
  //   book: 4,
  // };

  return (
    <>
      <Head />

      <div className="mx-auto my-4 min-h-screen w-full px-4 md:max-w-[720px] lg:max-w-[1200px]">
        <div className="flex flex-row items-center justify-center font-bold">
          আমাদের কোর্সসমূহ
        </div>

        <FilterResult />
      </div>
    </>
  );
};

export default BrowsePageExam;
