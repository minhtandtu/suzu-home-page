import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
import Image from 'next/image';

export const ServiceHero = ({item}) => {
  return (
    <div className="mx-auto px-4 py-4">
      <div className="container mx-auto max-w-7xl">
        {/* Text Section */}
        <div className="py-8 md:py-16 lg:py-24 ">
          <div className="flex max-w-4xl flex-col justify-center">
            <TitleNoDash str1={item.name1} str2={item.name2} />
            <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
