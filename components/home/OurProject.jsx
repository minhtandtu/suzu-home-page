import React from 'react';
import Image from 'next/image';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';
import ProjectItem from '../shared/ProjectItem';
import Link from 'next/link';
import Title from '../shared/Title';
const projects = [
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
];
const OurProject = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      {/* Dự án của chúng tôi  */}
      <div className="container mx-auto max-w-7xl ">
        <div className="container mx-auto flex justify-between px-4">
          <div className="justify-center">
            <Title str1="DỰ ÁN" str2="CỦA CHÚNG TÔI" />
            {/* DASH ---------- */}
          </div>
          {/* Nut button */}
          <div className="isolate my-10 hidden justify-end md:inline-flex">
            <button
              type="button"
              className=" relative mr-4 flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 shadow
                   hover:bg-gray-50 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <ChevronLeftIcon className="h-10 w-10" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex h-16 w-16  items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-500 shadow hover:bg-gray-50 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <ChevronRightIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/* Ảnh */}
      <div className="mx-auto grid w-full gap-1 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-1 2xl:container">
        {projects.map((project) => (
          <ProjectItem key={project} project={project} aspect={'aspect-4/3'} />
        ))}
      </div>
      {/* Tim hieu them */}
      <div className="m-4 h-[122px] rounded border-[5px] border-gray-700 p-4 md:hidden">
        <Link href="/">
          <a className="cursor-pointer">
            <div className="text-left text-2xl font-bold text-gray-700">
              XEM THÊM DỰ ÁN
            </div>
            <div className="flex justify-end py-4">
              <div className=" ">
                <img
                  src="/Icon/triangle.svg"
                  alt="triangle"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OurProject;
