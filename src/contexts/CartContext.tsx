import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { PATHS } from '~/constants';
import { trpc } from '~/utils/trpc';
import axios from 'axios';
import { nanoid } from 'nanoid';
import type { Cart, Wishlist } from '@prisma/client';
import type { ReactNode } from 'react';

interface CartContextType {
  userWithCart?: {
    wishlist: Wishlist[];
    cart: Cart[];
  } | null;
  refetchData: () => void;
  addCourseToCart: (courseId: string) => void;
  addBookToCart: (courseId: string) => void;
  status: 'error' | 'success' | 'loading';
  addCourseToCartStatus: 'error' | 'success' | 'idle' | 'loading';
  addBookToCartStatus: 'error' | 'success' | 'idle' | 'loading';
  checkoutState: 'error' | 'success' | 'loading' | 'idk';
  type: 'BOOK' | 'COURSE' | 'TEST';
  handleCheckout: () => Promise<void>;
  handleCheckoutBook: (bookData: unknown) => Promise<void>;
  totalAmount: number;
}

interface CartContextProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const router = useRouter();
  const [checkoutState, setCheckoutStatus] = useState<
    'idk' | 'error' | 'loading' | 'success'
  >('idk');
  const { data: session, status: sessionStatus } = useSession();

  const {
    data: userWithCart,
    status,
    refetch,
  } = trpc.user.findCartByUser.useQuery(
    {
      includeCourse: true,
      includeBook: true,
    },
    { enabled: sessionStatus === 'authenticated' },
  );

  const totalAmount = useMemo(() => {
    if (!userWithCart) return 0;

    return userWithCart?.cart?.reduce((acc, curr) => {
      if (curr.course) {
        if (!curr?.course?.coursePrice) return acc;
        return acc + curr?.course?.coursePrice;
      } else if (curr.book) {
        if (!curr?.book?.bookPrice) return acc;
        return acc + curr?.book?.bookPrice;
      }
      return acc;
    }, 0);
  }, [userWithCart]);

  const handleCheckout = async () => {
    setCheckoutStatus('loading');
    if (
      status === 'loading' ||
      status === 'error' ||
      sessionStatus === 'unauthenticated' ||
      sessionStatus === 'loading' ||
      !session?.user?.id ||
      !userWithCart?.cart
    ) {
      toast.error('Payment error! Try later');
      setCheckoutStatus('error');
      return;
    }

    if (userWithCart?.cart[0]?.courseId) {
      try {
        const data = await axios.post(`/api/payment/create`, {
          amount: totalAmount,
          orderDescription: nanoid(),
          courseIds: userWithCart?.cart?.map((elem) => elem.courseId),
          userId: session?.user?.id,
        });

        setCheckoutStatus('success');
        router.push(data.data.gatewayUrl);
      } catch (error) {
        toast.error('Payment creation error! Try later');
        setCheckoutStatus('error');
        console.error('error when create payment');
        console.error(error);
      }
    } else {
      toast.error('Enter your name, number and address correctly');
      setCheckoutStatus('error');
    }
  };

  const handleCheckoutBook = async (bookData: unknown) => {
    // show a confirmation modal and a checkbok to agree with terms and conditions, privacy policy, and refund policy before proceeding to payment

    setCheckoutStatus('loading');
    if (
      status === 'loading' ||
      status === 'error' ||
      sessionStatus === 'unauthenticated' ||
      sessionStatus === 'loading' ||
      !session?.user?.id ||
      !userWithCart?.cart
    ) {
      toast.error('Payment error! Try later');
      setCheckoutStatus('error');
      return;
    }

    if (bookData && userWithCart?.cart[0]?.bookId) {
      try {
        const data = await axios.post(`/api/buy/create`, {
          amount: totalAmount,
          orderDescription: nanoid(),
          bookIds: userWithCart?.cart?.map((elem) => elem.bookId),
          userId: session?.user?.id,
          ...bookData,
        });

        setCheckoutStatus('success');
        router.push(data.data.gatewayUrl);
      } catch (error) {
        console.log(error);

        toast.error('Payment creation error!');
        setCheckoutStatus('error');
        console.error('error when create payment');
        console.error(error);
      }
    } else if (userWithCart?.cart[0]?.courseId) {
      handleCheckout();
    }
  };

  const { mutate: addCourseToCartMutate, status: addCourseToCartStatus } =
    trpc.user.addCourseToCart.useMutation();

  const { mutate: addBookToCartMutate, status: addBookToCartStatus } =
    trpc.user.addBookToCart.useMutation();

  const addCourseToCart = (courseId: string) => {
    if (sessionStatus === 'unauthenticated') {
      router.push(`/${PATHS.REGISTER}`);
      return;
    }

    addCourseToCartMutate({ courseId });
  };

  const addBookToCart = (bookId: string) => {
    if (sessionStatus === 'unauthenticated') {
      router.push(`/${PATHS.REGISTER}`);
      return;
    }

    addBookToCartMutate({ bookId });
  };

  const refetchData = () => {
    refetch();
  };

  useEffect(() => {
    if (addCourseToCartStatus === 'success') {
      toast.success('Course is Added to cart successfully!');
      refetchData();
    }

    if (addCourseToCartStatus === 'error') {
      //toast.error('Failed! Try later!');
    }

    if (addBookToCartStatus === 'success') {
      toast.success('Book is Added to cart successfully!');
      refetchData();
    }

    if (addBookToCartStatus === 'error') {
      //toast.error('Failed! Try later!');
    }
  }, [addCourseToCartStatus, addBookToCartStatus]);

  return (
    <CartContext.Provider
      value={{
        checkoutState,
        totalAmount,
        handleCheckout,
        handleCheckoutBook,
        userWithCart,
        refetchData,
        status,
        addCourseToCart,
        addCourseToCartStatus,
        addBookToCart,
        addBookToCartStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default function useCart() {
  return useContext(CartContext);
}
