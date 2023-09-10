import { WalletIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/24/outline';
import Loading from '../buttons/Loading';
import { trpc } from '~/utils/trpc';
import { PATHS } from '~/constants';
import Link from 'next/link';

export default function PaymentHistory() {
  const { data: payments, status } = trpc.user.findPayments.useQuery();

  return (
    <section className="mt-4 flex w-full flex-col space-y-6 px-2 md:px-14 lg:px-20">
      <h1 className="flex space-x-2 text-3xl">
        <WalletIcon className="h-10 w-10" /> <span>Courses/Books bought</span>
      </h1>

      {status === 'loading' ? (
        <div className="absolute-center min-h-[10rem] w-full">
          <Loading />
        </div>
      ) : (
        <ul className="flex flex-col space-y-4">
          {payments && payments.length > 0 ? (
            payments.map((payment) => {
              return (
                <PaymentItem
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  course={payment.course}
                  book={payment.book}
                  key={payment.id}
                  createdAt={payment.createdAt}
                />
              );
            })
          ) : (
            <li>You have not paid any Course yet</li>
          )}
        </ul>
      )}
    </section>
  );
}

// purchase date + course title + course image + instructor
function PaymentItem({
  course,
  book,
  createdAt,
}: {
  course: {
    coursePrice: number;
    instructor: { name: string };
    name: string;
    slug: string;
    thumbnail: string;
  };
  book: {
    bookPrice: number;
    addedBy: { name: string };
    name: string;
    slug: string;
    thumbnail: string;
  };
  createdAt: Date;
}) {
  return (
    <li>
      {course && (
        <Link
          className="flex h-fit w-full cursor-pointer items-center space-x-4 rounded-xl bg-white px-2 py-4 shadow-xl dark:bg-dark-background"
          href={`/${PATHS.COURSE}/${course.slug}`}
        >
          <div className="my-auto w-[25%] md:w-[20%] lg:w-[15%]">
            <figure className="relative overflow-hidden rounded-xl pb-[56.25%]">
              <Image
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                fill
                alt="course-thumbnail"
                src={course.thumbnail}
              />
            </figure>
          </div>

          <div className="h-full flex-1">
            <h2 className="line-clamp-1">{course.name}</h2>
            <h3 className="my-2 text-xl">{course.instructor.name}</h3>
            <div className="mt-2 flex items-center justify-between pr-6">
              <time className="flex items-center space-x-2 text-lg">
                <ClockIcon className="h-4 w-4" />{' '}
                <span>{new Date(createdAt).toLocaleDateString('bn-BD')}</span>{' '}
              </time>
              <h4 className="font-bold text-rose-400">
                {new Intl.NumberFormat('bn-BD', {
                  style: 'currency',
                  currency: 'BDT',
                }).format(course.coursePrice as number)}{' '}
              </h4>
            </div>
          </div>
        </Link>
      )}

      {book && (
        <Link
          className="flex h-fit w-full cursor-pointer items-center space-x-4 rounded-xl bg-white px-2 py-4 shadow-xl dark:bg-dark-background"
          href={`/${PATHS.BOOK}/${book.slug}`}
        >
          <div className="my-auto w-[25%] md:w-[20%] lg:w-[15%]">
            <figure className="relative overflow-hidden rounded-xl pb-[56.25%]">
              <Image
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                fill
                alt="book-thumbnail"
                src={book.thumbnail}
              />
            </figure>
          </div>

          <div className="h-full flex-1">
            <h2 className="line-clamp-1">{book.name}</h2>
            <h3 className="my-2 text-xl">{book.addedBy.name}</h3>
            <div className="mt-2 flex items-center justify-between pr-6">
              <time className="flex items-center space-x-2 text-lg">
                <ClockIcon className="h-4 w-4" />{' '}
                <span>{new Date(createdAt).toLocaleDateString('bn-BD')}</span>{' '}
              </time>
              <h4 className="font-bold text-rose-400">
                {new Intl.NumberFormat('bn-BD', {
                  style: 'currency',
                  currency: 'BDT',
                }).format(book.bookPrice as number)}{' '}
              </h4>
            </div>
          </div>
        </Link>
      )}
    </li>
  );
}
