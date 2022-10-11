import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
const Fields = [
  {
    name: 'Branding',
    href: '#',
    current: false,
    des: ' Short Description',
  },

  {
    name: 'Graphic Design',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Animation',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'ILLUSTRATION',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'SEO & Social',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Marketing',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Copywriting',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'Brand Guideline',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'See More',
    href: '#',
    current: false,
    des: ' Short Description',
  },
];
const pages = [{name: 'Service', href: '#', current: true}];
const ServiceOurFields = () => {
  return (
    <div className="bg-gray-50 px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto mb-10 max-w-7xl">
        <div className=" mb-4 md:mb-8">
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <Link href="/">
                  <a className="text-sm font-medium text-gray-500 hover:text-gray-500">
                    Trang chủ
                    <span className="sr-only">Home</span>
                  </a>
                </Link>
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

        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-12 max-w-2xl space-y-4 md:mb-6 md:space-y-6">
            <p className="text-xl font-semibold text-gray-700 md:text-3xl">
              Lĩnh vực của chúng tôi
            </p>
            <p className="text-2xl font-normal text-gray-900 md:text-4xl">
              Định hình cho ý tưởng, sản phẩm và thương hiệu của bạn
            </p>
            <Link href="/portfolio">
              <div className="inline-flex  cursor-pointer rounded-lg border border-gray-300 bg-white ">
                <a className="mx-8 flex py-2 text-sm text-gray-700 md:text-base">
                  XEM DỰ ÁN CỦA CHÚNG TÔI
                  <ArrowRightIcon className="my-2 ml-2 h-5 -rotate-45 md:h-7" />
                </a>
              </div>
            </Link>
          </div>
          <div className="h-96 border-t  border-t-black md:w-1/3">
            {Fields.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className="flex justify-between border-b border-black py-6 text-xl font-semibold text-gray-700 md:text-3xl">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOurFields;
