import Image from 'next/image';
import Link from 'next/link';
import type { Dispatch, SetStateAction } from 'react';
import { memo, useState } from 'react';
import Balancer from 'react-wrap-balancer';

const select_options = [
  {
    title: 'Mottasin Pahlovi',
    label: 'Mottasin Pahlovi',
    img: ['images/im1.png', 'http://mpbian.com/images/blog/pahlobi.png'],
  },
];

const SelectBannerView = ({
  selectImgIndex,
}: {
  selectImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div className="btn-group">
      {select_options.length > 0 &&
        select_options.map((option, index) => {
          return (
            <button
              key={option.title}
              onClick={() => {
                selectImgIndex(index);
                setSelectIndex(index);
              }}
              className={`btn ${selectIndex === index ? 'btn-active' : ''}`}
            >
              {option.label}
            </button>
          );
        })}
    </div>
  );
};

function Banner() {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div className="my-6 h-fit w-full text-gray-800 dark:text-white">
      <div className="mx-auto flex h-full max-w-[1300px] flex-col md:flex-row">
        <div className="m-8 flex w-full flex-row items-center justify-center md:hidden lg:hidden">
          <Link href="/browse">
            <div className="h-55 w-70 m-2 mr-12 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-yellow-200 to-purple-200 p-4">
              <h6 className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text p-3 text-4xl font-extrabold text-transparent">
                কোর্স
              </h6>
            </div>
          </Link>
          <Link href="/browse/exam">
            <div className="h-55 w-70 m-2 ml-12 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-purple-200 to-green-200 p-4">
              <h4 className="items-center justify-center bg-gradient-to-r from-violet-500 to-green-600 bg-clip-text p-3 text-4xl font-extrabold text-transparent">
                পরীক্ষা
              </h4>
            </div>
          </Link>
        </div>

        <aside className="absolute-center flex-1 px-10 py-7">
          <div className="full-size flex flex-col items-center justify-center space-y-3">
            <h1 className="text-center text-6xl font-semibold capitalize md:w-full md:text-5xl md:leading-[5rem] lg:text-left lg:text-8xl">
              <Balancer>
                স্মার্ট এনায়েতপুর
                <p className="items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text font-extrabold text-transparent">
                  Mottasin Pahlovi
                </p>
              </Balancer>
            </h1>

            <p className="font text-xl text-gray-500 dark:text-white/60 md:text-3xl">
              &rdquo;MPBIAN mission is to improve lives through learning. We
              enable anyone anywhere to access that educational content to learn
              (students). We consider our marketplace model the best way to
              offer valuable educational content to our users.&rdquo;
            </p>
          </div>
        </aside>

        <aside className="absolute-center relative flex-1 flex-col space-y-2 p-7">
          <div className="overflow-hidden rounded-3xl lg:w-4/5">
            {selectIndex === 0 && (
              <Image
                width={400}
                height={100}
                src="images/im2.png"
                alt="Mottasin Pahlovi"
              />
            )}
          </div>

          <SelectBannerView selectImgIndex={setSelectIndex} />
        </aside>
      </div>
    </div>
  );
}

export default memo(Banner);
