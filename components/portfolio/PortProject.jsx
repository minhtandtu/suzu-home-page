import React from 'react';
import clsx from 'clsx';
import {ChevronRightIcon, HomeIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid';
import {Combobox} from '@headlessui/react';
import Link from 'next/link';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
const pages = [
  {name: 'Dự án', href: '#', current: true},
  // {name: 'Project Nero', href: '#', current: false},
];

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
  {
    name: 'BAO LẦN YÊU CHO VỪA',
    description: 'Info graphic, Event, Marketing',
    branch: 'SUZU GROUP',
    imageSrc: '/Project/baolanyeuchovua.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];
const tabs = [
  {name: 'Tất cả', href: '#', current: true},
  {name: 'Company', href: '#', current: false},
  {name: 'Team Members', href: '#', current: false},
  {name: 'Billing', href: '#', current: false},
];
const sortcombox = [
  {id: 1, name: 'Mới nhất'},
  {id: 2, name: 'Giàu nhất'},
  {id: 3, name: 'Bự nhất'},
  // More users...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
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
const PortProject = () => {
  return (
    <div className="container mx-auto bg-gray-50 px-4 py-8 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl ">
        {/* breadscrums + Tag + Combobox */}
        <div className="">
          <div className="">
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <li>
                  <div>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-500"
                    >
                      Trang chủ
                      <span className="sr-only">Home</span>
                    </a>
                  </div>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-7 w-7 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href={page.href}
                        className="ml-2 text-sm font-medium text-red-700 hover:text-gray-900"
                        aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          {/*  Tag + Combobox */}
          <div className="flex items-center">
            <div className="mr-4 flex-1">
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  defaultValue={tabs.find((tab) => tab.current).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current
                            ? 'border-red-500 text-red-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                        )}
                        aria-current={tab.current ? 'page' : undefined}
                      >
                        {tab.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            {/* Combobox */}
            <div className="w-44 md:w-64">
              <label
                htmlFor="comboBox"
                className="block text-sm font-medium text-gray-700"
              >
                {/* Text show above Combobox */}
              </label>
              <select
                id="location"
                name="location"
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                defaultValue=""
              >
                {sortcombox.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Image Grid */}
        <div className="projects grid gap-4 py-14 md:grid-cols-12 md:py-16">
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
                <div className=" space-y-3 text-left text-white ">
                  <p className=" text-xs font-semibold lg:text-base ">
                    {item.branch}
                  </p>
                  <p className=" text-xl font-semibold lg:text-3xl">
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
                    className=" h-12 w-12 items-center rounded-md bg-transparent px-2 py-2 font-medium group-hover:bg-red-500  group-hover:text-white   
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
        </div>
        {/* Pagination */}
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 py-4 sm:px-0 md:py-8">
          <div className="-mt-px flex w-0 flex-1 ">
            <Link href={'/'}>
              <div className=" rounded-lg border border-gray-500 ">
                <a
                  href="#"
                  className="inline-flex items-center border-t-2 border-transparent px-8 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
                >
                  <ArrowLeftIcon
                    className=" mr-1 h-5 w-5 text-gray-400 md:mr-3"
                    aria-hidden="true"
                  />
                  QUAY LẠI
                </a>
              </div>
            </Link>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              1
            </a>
            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-red-500 px-4 pt-4 text-sm font-medium text-red-600"
              aria-current="page"
            >
              2
            </a>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              3
            </a>
            <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
              ...
            </span>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              8
            </a>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              9
            </a>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              10
            </a>
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <Link href={'/'}>
              <div className=" rounded-lg border border-gray-500 ">
                <a
                  href="#"
                  className="inline-flex items-center border-t-2 border-transparent px-8 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
                >
                  TIẾP THEO
                  <ArrowRightIcon
                    className="ml-1 h-5 w-5 text-gray-400 md:ml-3"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PortProject;
