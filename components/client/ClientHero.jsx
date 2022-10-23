import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
import Image from 'next/image';

export const ClientHero = () => {
  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex max-w-4xl flex-col justify-center">
          <TitleNoDash str1={'KHÁCH HÀNG'} str2={'CỦA CHÚNG TÔI'} />
          <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
            Mọi giải pháp tuyệt vời đều bắt đầu bằng câu chuyện thậm chí còn hay
            hơn, nhưng không có khách hàng, sẽ không có một câu chuyện nào để
            kể.
          </p>
        </div>
      </div>
    </div>
  );
};
