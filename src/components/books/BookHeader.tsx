import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { BsBook, BsHeart, BsStarFill } from 'react-icons/bs';
import { Else, If, Then } from 'react-if';
import { PATHS } from '~/constants';
import useIsAddToCart from '~/hooks/useIsAddToCart';

import Loading from '../buttons/Loading';
import Breadcrumbs from '../shared/Breadcrumbs';

import type { Book, Wishlist } from '@prisma/client';
import type { ReactNode } from 'react';
import useCart from '~/contexts/CartContext';
import useIsEnrolled from '~/hooks/useIsEnrolled';
import { useSession } from 'next-auth/react';
import {
  StarIcon,
  UserIcon,
  ClockIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Modal from '../partials/Modal';
import { FaEye, FaPenFancy, FaPenNib } from 'react-icons/fa';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs, Document, Page } from 'react-pdf';
import { RiListOrdered, RiPenNibLine } from 'react-icons/ri';
import { BiCategory, BiErrorCircle, BiShow } from 'react-icons/bi';
import { VscBracketError, VscListTree, VscVersions } from 'react-icons/vsc';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface BookHeaderProps {
  book?: Book;
  ratingValue: number;
  children: ReactNode;

  isLoading?: boolean;
  handleAddWishBook: () => void;
  handleDeleteWishBook: (wishlistId: string) => void;
  wishlist: Wishlist[];
}

export default function BookHeader({
  children,
  book,
  ratingValue,
  wishlist,
  handleAddWishBook,
  isLoading,
  handleDeleteWishBook,
}: BookHeaderProps) {
  const cartCtx = useCart();
  const router = useRouter();
  const isAddToCart = useIsAddToCart({ book });

  const isEnrolled = useIsEnrolled({ book });

  const { status: sessionStatus } = useSession();

  const wishlistItem = useMemo(() => {
    if (book && wishlist) {
      return wishlist.find((fvBook) => fvBook.bookId === book?.id);
    }

    return null;
  }, [book, wishlist]);

  const handleAddBookToCart = () => {
    if (sessionStatus === 'unauthenticated' && !cartCtx?.userWithCart) {
      router.push(`/${PATHS.REGISTER}`);
      return;
    }

    if (
      !book ||
      !cartCtx?.userWithCart ||
      cartCtx?.addBookToCartStatus === 'loading'
    )
      return;

    if (isAddToCart) {
      router.push(`/${PATHS.CART}`);
      return;
    }

    cartCtx?.addBookToCart(book.id);
  };
  const [showModal, setShowModal] = useState(false);

  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const renderPages = () => {
    const pages = [];

    for (let page = 1; page <= numPages; page++) {
      pages.push(
        <div key={page} className="pdf-page">
          <Page pageNumber={page} />
        </div>,
      );
    }

    return pages;
  };

  const topicChips = book?.topics?.split(', ').map((topic, i) => (
    <span
      key={i}
      className="flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-500"
    >
      {topic}
    </span>
  ));

  return (
    <div className="relative bg-white py-10 text-gray-600 dark:bg-dark-background dark:text-white/60">
      <style></style>
      {showModal && (
        <Modal
          title="একটু পড়ে দেখুন..."
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="pdfContainer">
            <Document
              file={book?.fileLink}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {renderPages()}
            </Document>
          </div>
        </Modal>
      )}

      <div className="mx-auto flex flex-col items-center md:max-w-[720px] lg:max-w-[1200px] lg:flex-row lg:items-start lg:justify-center">
        <div className="my-auto flex flex-col items-center space-y-6 md:max-w-[80%] lg:min-w-[70rem] lg:max-w-[70%] lg:items-start">
          {book ? (
            <Breadcrumbs
              category={book.category.name}
              subCategory={book.subCategory as string}
            />
          ) : (
            <div className="h-[3rem] w-3/4 animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
          )}

          {/* demo thumbnail  */}
          <div className="h-96 w-96 justify-center lg:h-96 lg:w-96  ">
            {book ? (
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  className="absolute inset-0 object-cover"
                  src={book.thumbnail as string}
                  alt="book-thumbnail"
                  layout="fill"
                />
              </div>
            ) : (
              <div className="h-full w-full animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
            )}
          </div>

          {book?.fileLink && (
            <div>
              <button
                className="mx-4 my-5 flex items-center space-x-2 rounded-full bg-purple-50 p-2 px-3 py-2 text-purple-700 shadow-lg transition duration-300 hover:bg-purple-300"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              >
                <FaEye />
                <span>একটু পড়ে দেখুন...</span>
              </button>
            </div>
          )}

          <div className="flex min-w-[33.2rem] max-w-[70%] flex-col space-y-6">
            {book ? (
              <h1 className="text-4xl font-semibold lg:text-5xl">
                {book.name}
              </h1>
            ) : (
              <div className="h-[5rem] w-full animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
            )}

            {book ? (
              <h1 className="rounded bg-purple-200 px-4 py-3 pt-4 text-4xl font-semibold text-purple-600 lg:text-5xl">
                {book.bookPrice} ৳{' '}
                <p className="text-xs">(With Currier Charge)</p>
              </h1>
            ) : (
              <div className="h-[5rem] w-full animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
            )}

            {book ? (
              <h2 className="text-2xl lg:text-3xl">{book.briefDescription}</h2>
            ) : (
              <div className="mx-auto h-[10rem] w-3/4 animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700 lg:mx-0"></div>
            )}

            <h3 className="flex items-center md:space-x-2">
              <BiCategory className=" h-6 w-6 md:inline-block" />
              <span>Topics: </span>{' '}
              {book ? (
                <div className="mx-2 flex flex-row gap-2">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  {topicChips}
                </div>
              ) : (
                <div className="h-[2rem] w-1/2 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              )}
            </h3>

            {book ? (
              <div className="flex flex-col items-start  gap-1 md:flex-row md:items-center md:space-x-4">
                <div className="flex items-center space-x-4">
                  <span className="inline-block">{ratingValue}</span>

                  <div className="flex space-x-2">
                    {Array.from(new Array(ratingValue).keys()).map((elem) => {
                      return (
                        <BsStarFill
                          key={elem}
                          className="h-5 w-5 text-yellow-500"
                        />
                      );
                    })}
                    {Array.from(new Array(5 - ratingValue).keys()).map(
                      (elem) => {
                        return (
                          <StarIcon
                            key={elem}
                            className="h-5 w-5 text-gray-500 dark:text-white"
                          />
                        );
                      },
                    )}
                  </div>
                </div>

                <div className="flex">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <span>({book.reviews.length} Rate)</span>
                  <span className="mx-2">|</span>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <span>{book.students.length} Sold</span>
                </div>
              </div>
            ) : (
              <div className="h-[4rem] w-full animate-pulse  gap-1 rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
            )}

            {book ? (
              <div className="flex flex-row md:space-x-4">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <span>
                  {' '}
                  <BsBook className=" inline-block h-6 w-6" /> {book.pages} Page
                </span>
                <span className="mx-2">|</span>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                {book.stock == 0 ? (
                  <div className="text-semibold mx-3 overflow-visible rounded-full bg-red-100 px-4 py-2 text-2xl text-red-600">
                    <BiErrorCircle className=" inline-block h-6 w-6" />{' '}
                    <b>Stock Out</b>
                  </div>
                ) : (
                  <span>
                    {' '}
                    <VscListTree className=" inline-block h-6 w-6" />
                    <b>{book.stock}+</b> {' items in stock'}
                  </span>
                )}
              </div>
            ) : (
              <div className="h-[4rem] w-full animate-pulse rounded-2xl bg-gray-300 dark:bg-gray-700"></div>
            )}

            <h3 className="flex items-center gap-1 md:space-x-2">
              <RiPenNibLine className=" h-6 w-6 md:inline-block" />
              <span>Writter: </span>{' '}
              {book ? (
                <span className="text-blue-500">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <b>{book.author} </b>
                </span>
              ) : (
                <div className="h-[2rem] w-1/2 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              )}
            </h3>

            <h3 className="flex items-center md:space-x-2">
              <BiShow className=" h-6 w-6 md:inline-block" />
              <span>Publisher: </span>{' '}
              {book ? (
                <span className="text-blue-500">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  {book.publisher}
                </span>
              ) : (
                <div className="h-[2rem] w-1/2 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              )}
            </h3>

            <h3 className="flex items-center gap-1  md:space-x-2">
              <VscVersions className=" h-6 w-6 md:inline-block" />
              <span>Edition: </span>{' '}
              {book ? (
                <span className="text-blue-500">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <b>{book.edition} </b>
                </span>
              ) : (
                <div className="h-[2rem] w-1/2 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              )}
            </h3>

            <h3 className="flex items-center  gap-1 md:space-x-2">
              <UserIcon className=" h-6 w-6 md:inline-block" />
              <span>Added By: </span>{' '}
              {book ? (
                <Link
                  className="text-blue-500"
                  href={`/${PATHS.USER}/${book.addedBy.id}`}
                >
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  {book.addedBy.name}
                </Link>
              ) : (
                <div className="h-[2rem] w-1/2 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              )}
            </h3>

            <h5 className="flex items-center space-x-2">
              <ClockIcon className="h-6 w-6" />{' '}
              <span className="flex">
                Last update:{' '}
                {book && new Date(book.updatedAt).toLocaleDateString('bn-BD')}
              </span>
              {!book && (
                <div className="h-[2rem] w-1/2 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              )}
            </h5>
          </div>

          <div className="mx-auto flex  w-[70%] gap-1 space-x-6">
            {book && Number(book.bookPrice) > 0 && !isEnrolled && (
              <button
                onClick={handleAddBookToCart}
                disabled={!book}
                className="btn-primary btn-lg btn w-[80%] transform-gpu transition-all hover:scale-[1.02]"
              >
                <If condition={cartCtx?.addBookToCartStatus === 'loading'}>
                  <Then>
                    <Loading />
                  </Then>
                  <Else>{isAddToCart ? 'Go to cart' : 'Add to cart'}</Else>
                </If>
              </button>
            )}

            <button
              onClick={() => {
                if (isLoading) return; //bc btn styles :b

                if (!wishlistItem) {
                  handleAddWishBook();
                } else {
                  handleDeleteWishBook(wishlistItem.id);
                }
              }}
              className="btn-ghost btn-active btn-lg btn flex-1 transform-gpu text-gray-600 transition-all hover:scale-[1.02] dark:text-white/60"
            >
              <If condition={isLoading}>
                <Then>
                  <Loading />
                </Then>
                <Else>
                  {!!wishlistItem ? (
                    <HeartIcon className="h-8 w-8 text-rose-500 animate-in zoom-in" />
                  ) : (
                    <HeartIcon className="h-8 w-8 animate-in zoom-in" />
                  )}
                </Else>
              </If>
            </button>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
