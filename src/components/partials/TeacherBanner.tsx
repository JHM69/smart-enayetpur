import Image from 'next/image';

import { PATHS } from '~/constants';
import Link from 'next/link';

export default function TeacherBanner() {
  return (
    <div className="my-10 flex h-[200px] min-h-[40rem] w-full flex-col items-center md:flex-row lg:h-fit">
      <figure className=" relative my-auto h-3/4 min-h-[100px] w-full max-w-[390px] md:h-full md:w-[60%] md:max-w-none lg:h-[450px] lg:w-[55%]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/EWci6tuxBb8"
          title="Teacher Video"
          allowFullScreen
        ></iframe>
      </figure>

      <div className="space-y- flex h-full flex-1 flex-col items-center p-6 text-gray-600 dark:text-white">
        <div className="flex w-full flex-col items-center lg:w-3/4">
          <h1 className="my-2 text-center font-bold lg:text-4xl">
            Join a Course
          </h1>

          <p className="my-6 w-full px-6">স্মার্ট এনায়েতপুর</p>
        </div>

        <button className="btn-primary btn-lg btn">Start learning today</button>
      </div>
    </div>
  );
}
