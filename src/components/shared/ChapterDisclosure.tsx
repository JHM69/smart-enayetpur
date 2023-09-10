import { Disclosure, useDisclosureState } from 'ariakit/disclosure';
import { memo, useEffect } from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { DocumentTextIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { useSetAtom } from 'jotai';
import { previewModalState, resources } from '~/atoms/previewLectureAtom';

import type { ChapterType, LectureType } from '~/types';
import { BiPlayCircle } from 'react-icons/bi';

const Lesson = ({ lecture }: { lecture: LectureType }) => {
  const setIsOpen = useSetAtom(previewModalState);
  const setResource = useSetAtom(resources);

  const selectIcon = () => {
    if (lecture.resources.find((rsc) => rsc.type === 'file')) {
      return <DocumentTextIcon className="inline-block h-6 w-6" />;
    }

    return <PlayCircleIcon className="inline-block h-6 w-6   " />;
  };

  return (
    <li className="line-clamp-1 flex items-center   justify-between overflow-visible rounded-full bg-purple-100  text-purple-900 dark:bg-purple-900 dark:text-purple-100">
      <div className="mx-2 gap-3 space-x-3">
        {' '}
        <span>{selectIcon()}</span>
        <span>{lecture.title}</span>{' '}
      </div>
      <div>
        {' '}
        {lecture.isPreview && (
          <button
            onClick={() => {
              setIsOpen(true);
              setResource(lecture.resources);
            }}
            className="flex cursor-pointer flex-row items-center justify-center overflow-visible rounded-full   bg-blue-100 px-4  py-1  text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:bg-blue-900 dark:text-blue-100"
          >
            <BiPlayCircle />
            Watch Free Preview
          </button>
        )}
      </div>
    </li>
  );
};

interface ChapterDisclosureProps {
  expand?: boolean;
  chapter: ChapterType;
}

function ChapterDisclosure({ expand, chapter }: ChapterDisclosureProps) {
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const disclosure = useDisclosureState();

  useEffect(() => {
    disclosure.setOpen(!!expand);
  }, [expand]);

  return (
    <div>
      <Disclosure
        state={disclosure}
        className="smooth-effect flex w-full justify-between rounded-lg bg-white p-4 text-left text-2xl text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-dark-background dark:text-white/70"
      >
        <span className="line-clamp-1 max-w-[50%] font-semibold">
          {chapter.title}
        </span>
        <div className="flex space-x-4">
          <span>{chapter.lectures?.length} lesson</span>
          <ChevronUpIcon
            className={`${
              disclosure.open ? 'rotate-180 transform' : ''
            } smooth-effect h-5 w-5 text-gray-800 dark:text-white`}
          />
        </div>
      </Disclosure>

      <div ref={animationParent} className="my-4">
        {disclosure.open && (
          <ul className="flex w-full flex-col space-y-8 px-6">
            {chapter.lectures &&
              chapter.lectures.length > 0 &&
              chapter.lectures.map((lecture) => {
                return <Lesson key={lecture.id} lecture={lecture} />;
              })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default memo(ChapterDisclosure);
