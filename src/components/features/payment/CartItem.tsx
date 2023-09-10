import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { MAPPING_LEVEL_LANGUAGE, PATHS } from '~/constants';
import type { CourseType } from '~/types';
import { trpc } from '~/utils/trpc';

import { HeartIcon, TagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import type { Book } from '@prisma/client';

interface CartItemProps {
  cartId: string;
  wishlistId: string | null;
  isFavorite?: boolean;
  course?: CourseType;
  book?: Book;
  bookId?: string;
  courseId?: string;
  refetchData: () => void;
}

export default function CartItem({
  course,
  book,
  bookId,
  courseId,
  wishlistId,
  isFavorite,
  refetchData,
  cartId,
}: CartItemProps) {
  const { mutate: deleteCourseFromCart, status1 } =
    trpc.user.deleteCourseFromCart.useMutation();

  const { mutate: addWishCourse, status: addWishCourseStatus } =
    trpc.user.addWishCourse.useMutation();
  const { mutate: deleteWishCourse, status: deleteWishCourseStatus } =
    trpc.user.deleteWishCourse.useMutation();

  const { mutate: deleteBookFromCart, status2 } =
    trpc.user.deleteBookFromCart.useMutation();

  const { mutate: addWishBook, status: addWishBookStatus } =
    trpc.user.addWishBook.useMutation();
  const { mutate: deleteWishBook, status: deleteWishBookStatus } =
    trpc.user.deleteWishBook.useMutation();

  const totalLectures = useMemo(() => {
    if (!course) return 0;

    return course.chapters.reduce((acc, curr) => {
      if (!curr?.lectures) return acc;

      return acc + curr?.lectures?.length;
    }, 0);
  }, [course]);

  const handleDeleteCart = () => {
    if (cartId) deleteCourseFromCart({ cartId });
    else if (bookId) deleteBookFromCart({ bookId });
  };

  const handleAddOrRemoveToFvList = () => {
    if (isFavorite && wishlistId) {
      if (courseId) deleteWishCourse({ courseId });
      else if (bookId) deleteWishBook({ bookId });
    } else {
      if (courseId) addWishCourse({ courseId });
      else if (bookId) addWishBook({ bookId });
    }
  };

  useEffect(() => {
    if (
      (status === 'success' ||
        addWishCourseStatus === 'success' ||
        deleteWishCourseStatus === 'success') &&
      refetchData &&
      typeof refetchData === 'function'
    ) {
      refetchData();
    }

    if (
      (status === 'success' ||
        addWishBookStatus === 'success' ||
        deleteWishBookStatus === 'success') &&
      refetchData &&
      typeof refetchData === 'function'
    ) {
      refetchData();
    }

    if (status === 'error') {
      toast.error('Oops! An error occurred');
    }
  }, [
    status,
    addWishCourseStatus,
    deleteWishCourseStatus,
    addWishBookStatus,
    deleteWishBookStatus,
  ]);

  return (
    <>
      {course && (
        <li className="flex space-x-2 rounded-xl bg-white dark:bg-dark-background">
          <div className="w-[30%] p-2">
            <Link href={`/${PATHS.COURSE}/${course.slug}`}>
              <figure className="relative m-auto overflow-hidden rounded-xl pb-[56.25%] md:rounded-2xl">
                <Image
                  alt="courser-thumbnail"
                  src={course.thumbnail as string}
                  fill
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                />

                <p className="absolute bottom-1 right-1 flex items-center justify-center  space-x-2 rounded-lg bg-rose-100 p-2 text-sm font-bold text-rose-700 md:text-xl">
                  <TagIcon className="inline-block h-4 w-4" />
                  <span>
                    {new Intl.NumberFormat('bn-BD', {
                      style: 'currency',
                      currency: 'BDT',
                    }).format(course?.coursePrice || 0)}{' '}
                  </span>
                </p>
              </figure>
            </Link>
          </div>

          <div className="flex flex-1 py-2 lg:py-4">
            <Link
              className="flex w-[80%] flex-col justify-between lg:w-[70%]"
              href={`/${PATHS.COURSE}/${course.slug}`}
            >
              <div className="flex flex-col space-y-0 lg:space-y-2">
                <h3 className="line-clamp-1 font-bold capitalize lg:line-clamp-2">
                  {course.name}
                </h3>
                <h4 className="text-xl md:text-2xl">
                  {course?.instructor?.name}
                </h4>
              </div>

              <div className="space-x-2 text-xl md:text-2xl">
                <span>{course?.chapters.length}chapter •</span>
                <span>{totalLectures} lesson •</span>
                <span>
                  {Object.keys(MAPPING_LEVEL_LANGUAGE).find(
                    (key) => MAPPING_LEVEL_LANGUAGE[key] === course.courseLevel,
                  )}
                </span>
              </div>
            </Link>

            <div className="flex flex-1 flex-col items-end justify-between p-2 lg:justify-evenly lg:p-4">
              <button
                onClick={handleDeleteCart}
                className="rounded-full p-2 hover:border hover:border-gray-600 dark:hover:border-white"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>

              <button
                onClick={handleAddOrRemoveToFvList}
                className="rounded-full p-2 hover:border hover:border-gray-600 dark:hover:border-white"
              >
                {isFavorite ? (
                  <HeartIconSolid className="h-8 w-8 text-rose-500" />
                ) : (
                  <HeartIcon className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </li>
      )}
      {book && (
        <li className="flex space-x-2 rounded-xl bg-white dark:bg-dark-background">
          <div className="w-[30%] p-2">
            <Link href={`/${PATHS.BOOK}/${book.slug}`}>
              <figure className="relative m-auto overflow-hidden rounded-xl pb-[56.25%] md:rounded-2xl">
                <Image
                  alt="bookr-thumbnail"
                  src={book.thumbnail as string}
                  width={300}
                  height={300}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                />

                <p className="absolute bottom-1 right-1 flex items-center justify-center  space-x-2 rounded-lg bg-rose-100 p-2 text-sm font-bold text-rose-700 md:text-xl">
                  <TagIcon className="inline-block h-4 w-4" />
                  <span>
                    {new Intl.NumberFormat('bn-BD', {
                      style: 'currency',
                      currency: 'BDT',
                    }).format(book?.bookPrice || 0)}{' '}
                  </span>
                </p>
              </figure>
            </Link>
          </div>

          <div className="flex flex-1 py-2 lg:py-4">
            <Link
              className="flex w-[80%] flex-col justify-between lg:w-[70%]"
              href={`/${PATHS.BOOK}/${book.slug}`}
            >
              <div className="flex flex-col space-y-0 lg:space-y-2">
                <h3 className="line-clamp-1 font-bold capitalize lg:line-clamp-2">
                  {book.name}
                </h3>
                <h4 className="text-xl md:text-2xl">{book?.addedBy?.name}</h4>
              </div>

              <div className="space-x-2 text-xl md:text-2xl">
                <span>{book?.briefDescription}</span>
              </div>
            </Link>

            <div className="flex flex-1 flex-col items-end justify-between p-2 lg:justify-evenly lg:p-4">
              <button
                onClick={handleDeleteCart}
                className="rounded-full p-2 hover:border hover:border-gray-600 dark:hover:border-white"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>

              <button
                onClick={handleAddOrRemoveToFvList}
                className="rounded-full p-2 hover:border hover:border-gray-600 dark:hover:border-white"
              >
                {isFavorite ? (
                  <HeartIconSolid className="h-8 w-8 text-rose-500" />
                ) : (
                  <HeartIcon className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
