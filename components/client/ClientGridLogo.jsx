import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
const ClientLogo = [
  {
    name: 'Branding',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },

  {
    name: 'Graphic Design',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'Animation',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'ILLUSTRATION',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'SEO & Social',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'Marketing',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'Copywriting',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'Brand Guideline',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
  {
    name: 'See More',
    href: '#',
    imageSrc: '/Logo/logoBrand.png',
  },
];
const ClientGridLogo = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto mb-10 max-w-7xl">
        <div className="container mx-auto grid grid-cols-2 px-4 md:grid-cols-4">
          {ClientLogo.map((item, index) => (
            <div
              key={index}
              className="aspect-square w-full border border-gray-200"
            >
              <img src={item.imageSrc} className="aspect-square w-full"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientGridLogo;
