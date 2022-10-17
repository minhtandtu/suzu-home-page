import React from 'react';
import clsx from 'clsx';
import {ChevronRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
import BlogPost from '../shared/BlogPost';
const pages = [
  {name: 'Tin tức', href: '#', current: true},
  // {name: 'Project Nero', href: '#', current: false},
];
const specialpost = [
  {
    imageSrc: '/Post/Image1.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {
        name: 'Article',
        href: '#',
        color: 'bg-red-100 text-red-800',
      },
      {
        name: 'Design',
        href: '#',
        color: 'bg-lime-100 text-lime-800',
      },
      {
        name: 'Marketing',
        href: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
    ],
    href: '#',
  },
  {
    imageSrc: '/Post/Image2.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {
        name: 'Article',
        href: '#',
        color: 'bg-red-100 text-red-800',
      },
      {
        name: 'Design',
        href: '#',
        color: 'bg-lime-100 text-lime-800',
      },
      {
        name: 'Marketing',
        href: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
    ],

    href: '#',
  },
  {
    imageSrc: '/Post/Image3.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {
        name: 'Article',
        href: '#',
        color: 'bg-red-100 text-red-800',
      },
      {
        name: 'Design',
        href: '#',
        color: 'bg-lime-100 text-lime-800',
      },
      {
        name: 'Marketing',
        href: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
    ],

    href: '#',
  },
];

const post = [
  {
    imageSrc: '/Post/Image4.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Marketing', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
    ],
    href: '#',
  },
  {
    imageSrc: '/Post/Image5.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Article', href: '#', color: 'bg-lime-100 text-lime-800'},
      {name: 'Design', href: '#', color: 'bg-indigo-100 text-indigo-800'},
    ],
    href: '#',
  },
  {
    imageSrc: '/Post/Image6.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {name: 'Marketing', href: '#', color: 'bg-red-100 text-red-800'},
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Design', href: '#', color: 'bg-blue-100 text-blue-800'},
    ],
    href: '#',
  },
  {
    imageSrc: '/Post/Image7.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {name: 'Marketing', href: '#', color: 'bg-red-100 text-red-800'},
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Design', href: '#', color: 'bg-blue-100 text-blue-800'},
    ],
    href: '#',
  },
  {
    imageSrc: '/Post/Image8.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {name: 'Marketing', href: '#', color: 'bg-red-100 text-red-800'},
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Design', href: '#', color: 'bg-blue-100 text-blue-800'},
    ],
    href: '#',
  },
  {
    imageSrc: '/Post/Image9.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {name: 'Marketing', href: '#', color: 'bg-red-100 text-red-800'},
      {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
      {name: 'Design', href: '#', color: 'bg-blue-100 text-blue-800'},
    ],
    href: '#',
  },
];
const tabs = [
  {name: 'Tất cả', href: '#', current: true},
  {name: 'Design', href: '#', current: false},
  {name: 'Produc', href: '#', current: false},
  {name: 'Software Engineering', href: '#', current: false},
  {name: 'Customer Success', href: '#', current: false},
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
function blogpost(post) {
  return (
    <div className="space-y-2 pb-4 md:flex md:space-y-0">
      {/* Content */}
      <img
        src={post.imageSrc}
        className="h-52 w-full rounded-lg object-cover md:w-[50%] "
      ></img>
      <div className="flex flex-col justify-between space-y-4 md:ml-4 md:w-[50%] md:space-y-2">
        <div className="flex text-sm font-semibold text-purple-700">
          <p>{post.author}</p> <p> &nbsp;&bull;&nbsp; </p> <p>{post.date}</p>
        </div>
        <div className="flex justify-between pr-2">
          <p className="text-xl font-semibold text-gray-900 md:text-2xl">
            {post.name}
          </p>{' '}
          <ArrowRightIcon className="h-6 w-6 -rotate-45" />
        </div>
        <p className="text-base font-normal text-gray-500">
          {post.description}
        </p>
        <div className="category space-x-2">
          {post.categories.map((item, index) => (
            <a key={index} href={item.href} className="inline-block">
              <span
                className={classNames(
                  item.color,
                  'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium',
                )}
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const BlogMain = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl ">
        {/* breadscrums + Tag + Combobox */}
        <div className="container mx-auto px-4">
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-end space-x-2">
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
          {/* Blog Nổi Bậc + Tất Cả Bài Viết*/}
          <div className="py-8 md:py-16 ">
            {/* Nổi Bậc */}
            <div className="pb-4 md:pb-8">
              <p className="my-4 text-xl font-semibold text-gray-900 md:my-6 md:text-2xl">
                Nổi bật
              </p>
              <div className="mb-4 md:flex md:space-x-4">
                {/* Box1 */}
                <div className="pb-4 md:w-1/2">
                  <BlogPost post={specialpost[0]} />
                </div>
                <div className="md:w-1/2">
                  <div className="w-full md:flex md:h-[50%]">
                    {blogpost(specialpost[0])}
                  </div>
                  <div className="w-full md:h-[50%]">
                    {' '}
                    {blogpost(specialpost[2])}
                  </div>

                  <div></div>
                </div>
              </div>
            </div>

            {/* Tất Cả Bài Viết*/}
            <div>
              <p className="my-4 text-xl font-semibold text-gray-900 md:my-6 md:text-2xl">
                Tất cả bài viết
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {post.map(
                  (item) => (
                    <BlogPost key={item.name} post={item} />
                  ),
                  //  blogpost(item)
                )}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <nav className="flex items-center justify-between border-t border-gray-200 px-4 py-4 sm:px-0 md:py-8">
            <div className="-mt-px flex w-0 flex-1 ">
              <Link href={'/'}>
                <div className="rounded-lg border border-gray-500 ">
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
    </div>
  );
};

export default BlogMain;
