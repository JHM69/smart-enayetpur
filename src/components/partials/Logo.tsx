import Link from 'next/link';

import Image from 'next/image';
interface LogoProps {
  customStyles?: string;
}
export default function Logo({ customStyles }: LogoProps) {
  return (
    <div
      className={`${customStyles} relative min-h-[2.6rem] min-w-[8rem]  md:min-w-[10rem]`}
    >
      <Link href={'/'} className={``}>
        <div className="flex items-center justify-center">
          {/* <img src="/images/logo.svg" alt="logo" width="30" height="30" /> */}
          <div className="text-3xl font-bold text-gray-700 dark:text-primary md:text-4xl">
            স্মার্ট এনায়েতপুর
          </div>
        </div>
      </Link>
    </div>
  );
}
