import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {Breadscrumb} from '../shared/Breadscrumb';
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
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const pages = [{name: 'Service', href: '#', current: true}];
const ServiceOurFields = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto mb-10 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-8">
            <Breadscrumb pages={pages} />
          </div>

          <div className="flex flex-col justify-between md:flex-row">
            <div className="mb-12 max-w-2xl space-y-4 md:mb-6 md:space-y-6">
              <p className="text-xl font-semibold text-gray-700 md:text-3xl">
                Lĩnh vực của chúng tôi
              </p>
              <p className="text-2xl font-normal text-gray-900 md:text-4xl">
                Định hình cho ý tưởng, sản phẩm và thương hiệu của bạn
              </p>
              <div className="pb-4">
                <Link href="/portfolio">
                  <div className="btn-gray whitespace-nowrap">
                    <p>
                      XEM DỰ ÁN CỦA CHÚNG TÔI
                      <ArrowRightIcon className="h-6 -rotate-45 pl-2 md:h-7 " />
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="border-t  border-t-black md:w-1/3">
              {Fields.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center justify-between border-b border-black  "
                >
                  <Link href={item.href}>
                    <a className="flex justify-between py-6 text-xl font-semibold text-gray-700 transition duration-300 group-hover:text-red-500  md:text-3xl">
                      {item.name}
                    </a>
                  </Link>
                  <div className="">
                    {' '}
                    <p className="flex aspect-square h-full items-center rounded-lg p-4   transition duration-500  group-hover:bg-red-500">
                      <ArrowRightIcon className="h-6 -rotate-45   pl-2 text-gray-500 transition duration-500 group-hover:text-white  md:h-7" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOurFields;
