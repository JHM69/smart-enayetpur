import { type NextPage } from 'next';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import FilterArticle from '~/components/features/browse/FilterArticle';
import FilterPanelExam from '~/components/features/browse/FilterPanelExam';
import Head from '~/components/shared/Head';

const BrowsePageExam: NextPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <Head />

      <div className="mx-auto min-h-screen w-full items-center justify-center px-4 pt-10 md:max-w-[720px] lg:max-w-[1200px]">
        {showFilter && <FilterPanelExam />}
        <FilterArticle />
      </div>
    </>
  );
};

export default BrowsePageExam;
