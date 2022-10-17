import React from 'react';
import {ChevronRightIcon, ArrowRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {ClockIcon} from '@heroicons/react/outline';
import Title from '../shared/Title';
const pages = [
  {name: 'About us', href: '#', current: true},
  // {name: 'Project Nero', href: '#', current: false},
];
const leaders = [
  {
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image.png',
  },
  {
    name: 'Phoenix Baker',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image8.png',
  },
  {
    name: 'Lana Steiner',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image2.png',
  },
  {
    name: 'Demi Wilkinson',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image3.png',
  },
  {
    name: 'Candice Wu',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image4.png',
  },
  {
    name: 'Natali Craig',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image5.png',
  },
  {
    name: 'Drew Cano',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image6.png',
  },
  {
    name: 'Orlando Diggs',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image7.png',
  },
];

export const AboutUsLeaders = () => {
  return (
    <div className="mx-auto bg-gray-50 px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl ">
        {/* breadscrums */}

        <nav className="mb-8 flex md:mb-16" aria-label="Breadcrumb">
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
                <div className="flex items-end">
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
        <Title str1={'LÃNH ĐẠO'} str2=" CÔNG TY" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {leaders.map((item, index) => (
            <div>
              <img
                src={item.imageSrc}
                className="aspect-square rounded-lg  "
              ></img>
              <p className="pl-4 text-lg font-medium text-gray-900 md:text-2xl">
                {item.name}
              </p>
              <p className="pl-4 text-base font-normal text-red-500 md:text-lg">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};