import Image from 'next/image';
import Link from 'next/link';
import { memo, useState } from 'react';
import { PATHS } from '~/constants';

import type { User } from '@prisma/client';
import { BsStarFill } from 'react-icons/bs';

interface BookCardProps {
  book: {
    addedBy: User;
    name: string;
    slug: string;
    thumbnail: string | null;
    bookPrice: number | null;
    fileLink: string | null;
  };
}

function BookCard({ book }: BookCardProps) {
  return (
    <div className="smooth-effect aspect-h-3 aspect-w-2 relative rounded-2xl border-2 border-gray-600 bg-slate-100 lg:aspect-h-5 lg:aspect-w-3 hover:scale-[101%] dark:border-white/50 dark:bg-slate-900">
      <Link
        href={`/${PATHS.BOOK}/${book.slug}`}
        className="flex h-full flex-col overflow-hidden"
      >
        <figure className="aspect-h-2 aspect-w-2 relative overflow-hidden rounded-2xl lg:aspect-h-3 lg:aspect-w-3">
          <Image
            alt="book-thumbnail"
            fill
            src={book.thumbnail || ''}
            className="absolute inset-0 h-auto w-full bg-cover bg-center bg-no-repeat"
          />
        </figure>
        <h1 className="my-4 line-clamp-2 min-h-[1.8rem] overflow-hidden px-2 text-xl font-bold md:text-2xl">
          {book.name}
        </h1>
        <h2 className="line-clamp-1 px-2 text-lg font-light dark:text-white/80 md:text-xl">
          {book.addedBy.name}
        </h2>

        <div className="my-2 flex items-center px-2 text-lg md:space-x-2 md:text-xl">
          <span className="mr-2">4.0</span>
          <BsStarFill className="h-5 w-5 text-yellow-300" />
          <BsStarFill className="h-5 w-5 text-yellow-300" />
          <BsStarFill className="h-5 w-5 text-yellow-300" />
          <BsStarFill className="h-5 w-5 text-yellow-300" />
          <BsStarFill className="h-5 w-5 text-gray-300" />
        </div>

        <div className="flex w-full items-center px-2">
          <h3 className="text-xl font-bold text-rose-400 md:text-3xl">
            {Number(book.bookPrice) > 0
              ? new Intl.NumberFormat('bn-BD', {
                  style: 'currency',
                  currency: 'BDT',
                }).format(Number(book.bookPrice))
              : 'Free'}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="aspect-h-6 aspect-w-4 animate-pulse rounded-xl bg-gray-400 dark:bg-gray-700"></div>
  );
}

export default memo(BookCard);
