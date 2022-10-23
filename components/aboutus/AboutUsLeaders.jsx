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
    imageSrc: '/AboutUs/Image.png',
  },
  {
    name: 'Phoenix Baker',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image8.png',
  },
  {
    name: 'Lana Steiner',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image2.png',
  },
  {
    name: 'Demi Wilkinson',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image3.png',
  },
  {
    name: 'Candice Wu',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image4.png',
  },
  {
    name: 'Natali Craig',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image5.png',
  },
  {
    name: 'Drew Cano',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image6.png',
  },
  {
    name: 'Orlando Diggs',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image7.png',
  },
];

export const AboutUsLeaders = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto px-4 ">
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
          <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4 md:pt-0">
            {leaders.map((item, index) => (
              <div key={index}>
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
    </div>
  );
};
