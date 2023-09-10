import { type NextPage } from 'next';
import { GiPartyPopper } from 'react-icons/gi';
import { PATHS } from '~/constants';
import Link from 'next/link';
import Head from '~/components/shared/Head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const PaymentSuccess: NextPage = () => {
  const router = useRouter();
  const { tran_id, bookId, courseId } = router.query;

  const [book, setBook] = useState(false);
  const [course, setCourse] = useState(false);

  useEffect(() => {
    if (tran_id && bookId) {
      setBook(true);
    }
    if (tran_id && courseId) {
      setCourse(true);
    }
  }, [tran_id, bookId, courseId, router]);

  const handleCallClick = () => {
    // Replace this with the actual phone number you want to call
    const phoneNumber = '01320820854';

    // Initiate the phone call using the tel: link
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <Head title="Payment Status- স্মার্ট এনায়েতপুর" />

      <div className="mx-auto min-h-screen w-full pt-24 md:max-w-[720px] lg:max-w-[1200px]">
        <div className="absolute-center mt-auto w-full flex-col space-y-8">
          <GiPartyPopper className="h-20 w-20 text-green-600" />
          <h1 className="text-3xl font-bold text-green-600 md:text-4xl">
            Payment success!
          </h1>

          {book && (
            <div className="mx-10 w-full items-center justify-center px-8">
              <p className="mx-6 text-4xl">
                Your Book has been purchased successfully. We will contanct with
                you soon
              </p>
              <button className="btn-primary btn-lg btn m-4 w-full justify-center ">
                <Link href={`/track_order/${bookId}`}>Track Your Order</Link>
              </button>
            </div>
          )}

          {course && (
            <div className="flex flex-col">
              Your Course has been purchased successfully. GO to the course.
              <button className="btn-primary btn-lg btn">
                <Link href={`/${PATHS.MY_LEARNING}/${PATHS.COURSE}`}>
                  Go to My Courses
                </Link>
              </button>
            </div>
          )}

          <div className="absolute-center flex w-full flex-col space-x-6">
            <button className="btn-follow-theme btn-lg btn">
              <Link
                href={`/${PATHS.USER}/${PATHS.USER_PROFILE}?section=payment-history`}
              >
                Review payment history
              </Link>
            </button>
          </div>

          {bookId && (
            <div className="absolute-center w-full space-x-6">
              <button
                className="btn-follow-theme btn-lg btn"
                onClick={handleCallClick}
              >
                Call US
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
