import React from 'react';
import Link from 'next/link';
import {ChevronLeftIcon} from '@heroicons/react/solid';
const Content404 = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center gap-8 px-4 md:flex-row ">
        <div className="space-y-4 md:w-1/2 ">
          <p className="text-base font-semibold text-red-500 md:mb-4">
            404 error
          </p>
          <p className="text-3xl font-semibold tracking-tight text-gray-700 md:mb-4 md:text-5xl ">
            Không tìm thấy trang...
          </p>
          <p className="text-sm text-gray-500 md:mb-4 md:text-xl">
            Xin lỗi, trang bạn tìm không tồn tại hoặc đã bị xóa đi
          </p>
          <Link href="">
            <div className="btn-red">
              <a className="flex items-center">
                <ChevronLeftIcon className="h-6 w-6" /> TRANG CHỦ
              </a>
            </div>
          </Link>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <img src="/404.svg" className="h-full w-full object-cover"></img>
        </div>
      </div>
    </div>
  );
};

export default Content404;
