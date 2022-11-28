import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
const portfolioProjects = [
  {
    name: 'YÊU THƯƠNG TIẾP NỐI',
    description: 'Music video, Digital Graphic, Marketing',
    branch: 'ZALOPAY',
    imageSrc: '/Project/yeuthuongtiepnoi.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'ĐIỀU NHỎ BÉ VĨ ĐẠI',
    description: 'Visual, Animation, Marketing',
    branch: 'MOMO',
    imageSrc: '/Project/dieunhobevidai.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'MUỘN MÀNG LÀ TỪ LÚC ',
    description: 'Music video, Digital graphic, Marketing.',
    branch: 'MỸ TÂM',
    imageSrc: '/Project/muonmanglatuluc.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'MERRY CHRISTMAS',
    description: 'Info graphic, Event, Marketing',
    branch: 'VIMCOM CENTER',
    imageSrc: '/Project/merrychristmas.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'LÁ CỜ',
    description: 'Info graphic, Event, Marketingg',
    branch: 'BÁO TUỔI TRẺ',
    imageSrc: '/Project/laco.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'BAO LẦN YÊU CHO VỪA',
    description: 'Info graphic, Event, Marketing',
    branch: 'SUZU GROUP',
    imageSrc: '/Project/baolanyeuchovua.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'YÊU THƯƠNG TIẾP NỐI',
    description: 'Music video, Digital Graphic, Marketing',
    branch: 'ZALOPAY',
    imageSrc: '/Project/yeuthuongtiepnoi.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'ĐIỀU NHỎ BÉ VĨ ĐẠI',
    description: 'Visual, Animation, Marketing',
    branch: 'MOMO',
    imageSrc: '/Project/dieunhobevidai.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'MUỘN MÀNG LÀ TỪ LÚC ',
    description: 'Music video, Digital graphic, Marketing.',
    branch: 'MỸ TÂM',
    imageSrc: '/Project/muonmanglatuluc.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'MERRY CHRISTMAS',
    description: 'Info graphic, Event, Marketing',
    branch: 'VIMCOM CENTER',
    imageSrc: '/Project/merrychristmas.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'LÁ CỜ',
    description: 'Info graphic, Event, Marketingg',
    branch: 'BÁO TUỔI TRẺ',
    imageSrc: '/Project/laco.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
];

var i = 1;
var j = 0;
var a = false;
function colspan() {
  if (i == 2) {
    a = !a;
    i = 0;
  }
  i++;
  if (a) return 'md:col-span-7';
  else return 'md:col-span-5';
}
const projectGrid = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          {/* Image Grid */}
          <div className="grid gap-4 md:grid-cols-12">
            {portfolioProjects.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  'group relative col-span-1 h-64 overflow-hidden rounded-xl bg-blue-300 lg:h-96 xl:h-[450px]  ',
                  colspan(),
                )}
              >
                {/*  */}
                <img
                  src={item.imageSrc}
                  className={`h-auto object-cover group-hover:scale-125 group-hover:transition group-hover:duration-500 `}
                  alt={item.imageSrc.toString()}
                ></img>
                <div
                  className="absolute bottom-0 left-0 right-0  h-[50%] bg-gradient-to-b from-transparent to-black 
                   opacity-70 "
                ></div>

                <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between pl-4 pb-4">
                  {/* Text */}
                  <div className="space-y-3 text-left text-white ">
                    <p className="text-xs font-semibold lg:text-base ">
                      {item.branch}
                    </p>
                    <p className="text-xl font-semibold lg:text-3xl">
                      {item.name}
                    </p>
                    <p className="text-xs font-normal lg:text-base">
                      {item.description}
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="mr-2 hidden flex-col justify-end md:flex">
                    <button
                      type="button"
                      className="h-12 w-12 items-center rounded-md bg-transparent px-2 py-2 font-medium group-hover:bg-red-500  group-hover:text-white   
                  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="hidden h-6 w-6 -rotate-45 group-hover:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/">
              <div
                className={clsx(
                  'group relative col-span-1 h-28 cursor-pointer overflow-hidden rounded-xl border-4 border-gray-700 p-4 lg:h-96 xl:h-[450px] ',
                  colspan(),
                )}
              >
                <a className="cursor-pointer text-left text-2xl font-bold text-gray-700">
                  XEM THÊM DỰ ÁN
                  <div className="flex h-full items-end justify-end py-4">
                    <img
                      src="/Icon/triangle.svg"
                      alt="triangle"
                      className="h-10 w-10"
                    />
                  </div>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectGrid;
