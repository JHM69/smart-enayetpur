import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useDebounce } from 'usehooks-ts';
import useSearchModalState from '~/atoms/searchModalState';
import { PATHS } from '~/constants';
import { trpc } from '~/utils/trpc';

import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import Loading from '../buttons/Loading';

import type { Category, User } from '@prisma/client';
import type { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

interface ResultItemProps {
  course: {
    instructor: User;
    id: string;
    name: string;
    slug: string;
    thumbnail: string | null;
  };
}
interface ResultItemBookProps {
  book: {
    author: string;
    id: string;
    name: string;
    slug: string;
    category: Category;
    subCategory: string;
    thumbnail: string | null;
  };
}

interface ResultItemTestProps {
  test: {
    id: string;
    name: string;
    slug: string;
    author: string;
    category: Category;
    subCategory: string;
  };
}
interface ResultItemArticleProps {
  article: {
    id: string;
    title: string;
    slug: string;
    author: string;
    category: Category;
    subCategory: string;
    thumbnail: string | null;
  };
}

function ResultItem({ course }: ResultItemProps) {
  return (
    <li className="smooth-effect rounded-xl hover:bg-slate-200 dark:hover:bg-white/10">
      <Link
        href={`/${PATHS.COURSE}/${course.slug}`}
        className="flex items-center space-x-2 p-2 md:space-x-3 md:p-4"
      >
        <div className="w-fit">
          <figure className="relative h-20 w-36 overflow-hidden rounded-2xl lg:h-24 lg:w-40">
            <Image
              alt="course-thumbnail"
              fill
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              src={course.thumbnail || ''}
            />
          </figure>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <h1 className="line-clamp-1 font-semibold">{course.name}</h1>
          <h2>{course.instructor.name}</h2>
        </div>
      </Link>
    </li>
  );
}

function ResultItemBook({ book }: ResultItemBookProps) {
  return (
    <li className="smooth-effect rounded-xl hover:bg-slate-200 dark:hover:bg-white/10">
      <Link
        href={`/${PATHS.BOOK}/${book.slug}`}
        className="flex items-center space-x-2 p-2 md:space-x-3 md:p-4"
      >
        <div className="w-fit">
          <figure className="relative h-20 w-20 overflow-hidden rounded-2xl lg:h-40 lg:w-40">
            <Image
              alt="book-thumbnail"
              fill
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              src={book.thumbnail || ''}
            />
          </figure>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <h1 className="line-clamp-1 font-semibold">{book.name}</h1>
          <span>
            {book.category.name} - {book.subCategory}
          </span>
          <h2>{book.author}</h2>
        </div>
      </Link>
    </li>
  );
}

function ResultItemTest({ test }: ResultItemTestProps) {
  return (
    <li className="smooth-effect rounded-xl hover:bg-slate-200 dark:hover:bg-white/10">
      <Link
        href={`/${PATHS.EXAM}/${test.slug}`}
        className="flex items-center space-x-2 p-2 md:space-x-3 md:p-4"
      >
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="line-clamp-1 font-semibold">{test.name}</h1>
          <span>
            {test.category.name} - {test.subCategory}
          </span>
        </div>
      </Link>
    </li>
  );
}
function ResultItemArticle({ article }: ResultItemArticleProps) {
  return (
    <li className="smooth-effect rounded-xl hover:bg-slate-200 dark:hover:bg-white/10">
      <Link
        href={`/${PATHS.ARTICLE}/${article.slug}`}
        className="flex items-center space-x-2 p-2 md:space-x-3 md:p-4"
      >
        <div className="w-fit">
          <figure className="relative h-20 w-20 overflow-hidden rounded-2xl lg:h-40 lg:w-40">
            <Image
              alt="article-thumbnail"
              fill
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              src={article.thumbnail || ''}
            />
          </figure>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <h1 className="line-clamp-1 font-semibold">{article.title}</h1>
          <span>
            {article.category.name} - {article.subCategory}
          </span>
        </div>
      </Link>
    </li>
  );
}
const SEARCH_LIMIT = 4;

export default function SearchModal() {
  const [isOpen, setIsOpen] = useSearchModalState();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const router = useRouter();

  const {
    data: datas,
    // data: books,
    // data: tests,
    // data: articles,
    status: searchStatus,
  } = trpc.course.findResourseByName.useQuery(
    { name: debouncedValue, limit: SEARCH_LIMIT },
    { enabled: !!debouncedValue },
  );

  console.log(datas);
  // console.log(books);
  // console.log(tests);
  // console.log(articles);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setValue('');
    }

    return () => {
      setValue('');
    };
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[500]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed left-1/2 top-28 -translate-x-1/2 overflow-y-auto text-black dark:text-white">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="smooth-effect max-h-[80vh] w-[90vw] transform space-y-6 overflow-x-hidden overflow-y-scroll rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-background dark:shadow-white/5 md:w-[60vw] lg:w-[75vw]">
                  <div className="flex items-center space-x-4 px-4">
                    <MagnifyingGlassIcon className="h-10 w-10" />
                    <input
                      autoFocus={isOpen}
                      value={value}
                      onChange={handleChange}
                      type="text"
                      placeholder="Search Course/Book/Model Test/Article"
                      className="w-full bg-transparent p-3"
                    />
                  </div>

                  <If condition={searchStatus === 'loading' && value !== ''}>
                    <Then>
                      <div className="absolute-center min-h-[5rem] w-full">
                        <Loading styles="w-8 h-8" />
                      </div>
                    </Then>
                    <Else>
                      <div className="items-center justify-center bg-blue-50">
                        {' '}
                        <div className="items-center justify-center rounded bg-blue-100 px-4 py-2 text-center">
                          Course:
                        </div>
                        <ul className="space-y-4 rounded-xl ">
                          {datas?.courses &&
                            datas?.courses?.length &&
                            datas?.courses?.length > 0 &&
                            datas?.courses.map((course) => {
                              return (
                                <ResultItem key={course.id} course={course} />
                              );
                            })}
                        </ul>
                      </div>
                      <div className="items-center justify-center bg-green-50">
                        {' '}
                        <div className="items-center justify-center rounded bg-green-100 px-4 py-2 text-center">
                          Books:
                        </div>
                        <ul className="space-y-4">
                          {datas?.books &&
                            datas?.books.length > 0 &&
                            datas?.books.map((book) => {
                              return (
                                <ResultItemBook key={book.id} book={book} />
                              );
                            })}
                        </ul>
                      </div>
                      <div className="items-center justify-center bg-purple-50">
                        {' '}
                        <div className="items-center justify-center rounded bg-purple-100 px-4 py-2 text-center">
                          Model Test:
                        </div>
                        <ul className="space-y-4">
                          {datas?.tests &&
                            datas?.tests.length > 0 &&
                            datas?.tests.map((test) => {
                              return (
                                <ResultItemTest key={test.id} test={test} />
                              );
                            })}
                        </ul>
                      </div>
                      <div className="items-center justify-center bg-red-50">
                        {' '}
                        <div className="items-center justify-center rounded bg-red-100 px-4 py-2 text-center">
                          Article:
                        </div>
                        <ul className="space-y-4">
                          {datas?.articles &&
                            datas?.articles.length > 0 &&
                            datas?.articles.map((article) => {
                              return (
                                <ResultItemArticle
                                  key={article.id}
                                  article={article}
                                />
                              );
                            })}
                        </ul>
                      </div>
                    </Else>
                  </If>

                  {/* {courses && courses.length === SEARCH_LIMIT && (
                    <div className="absolute-center w-full">
                      <button className="rounded-xl bg-slate-200 p-4 text-black dark:bg-background_dark dark:text-white">
                        see more
                      </button>
                    </div>
                  )} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
