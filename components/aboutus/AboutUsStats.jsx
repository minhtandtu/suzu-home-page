import React from 'react';
import Title from '../shared/Title';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';

export const AboutUsStats = () => {
  return (
    <div className="px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-center">
          <Title str1={'PHÁT TRIỂN'} str2="CÙNG DOANH NGHIỆP" />
        </div>
        <div className="flex flex-wrap justify-center space-y-4 md:flex-nowrap md:space-x-4 md:space-y-0">
          <div className="w-full space-y-5 rounded-lg border border-gray-200 bg-gray-50 p-5 text-center md:p-10">
            <p className="text-5xl font-semibold text-red-500 md:text-6xl">
              200+
            </p>
            <p className="text-base font-medium text-gray-700 md:text-lg">
              Dự án hoàn thành
            </p>
            <p className="inline-flex text-sm font-medium text-red-500 md:text-base">
              Dự án&nbsp;
              <ArrowRightIcon className="h-6 w-6" />
            </p>
          </div>
          <div className="w-full space-y-5 rounded-lg border border-gray-200 bg-gray-50 p-5 text-center md:p-10">
            <p className="text-5xl font-semibold text-red-500 md:text-6xl">
              20+
            </p>
            <p className="text-base font-medium text-gray-700 md:text-lg">
              Khách hàng đã phục vụ
            </p>
            <p className="inline-flex text-sm font-medium text-red-500 md:text-base">
              KHÁCH HÀNG&nbsp;
              <ArrowRightIcon className="h-6 w-6" />
            </p>
          </div>
          <div className="w-full space-y-5 rounded-lg border border-gray-200 bg-gray-50 p-5 text-center md:p-10">
            <p className="text-5xl font-semibold text-red-500 md:text-6xl">
              10+
            </p>
            <p className="text-base font-medium text-gray-700 md:text-lg">
              Lĩnh vực khác nhau
            </p>
            <p className="inline-flex text-sm font-medium text-red-500 md:text-base">
              DỊCH VỤ&nbsp;
              <ArrowRightIcon className="h-6 w-6" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
