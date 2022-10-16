import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
import Image from 'next/image';
import Link from 'next/link';
export const BlogHero = () => {
  return (
    <div className=" mx-auto px-4 py-4">
      <div className="container mx-auto max-w-7xl ">
        {/* Text Section */}
        <div className="py-8  md:py-16 lg:py-24 ">
          <div className="flex max-w-4xl flex-col justify-center">
            <TitleNoDash str1={'TIN TỨC'} str2="SUZU GROUP" />
            <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
              Chúng tôi làm việc với khách hàng để cung cấp các giải pháp sáng
              Tin tức về ngành nghề, cuộc phỏng vấn, công nghệ và thông tin mới
              nhất.
            </p>
            <div className="mt-8 flex md:mt-16 ">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full max-w-sm rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:text-base"
                placeholder="Nhập địa chỉ email của bạn"
                aria-describedby="email-description"
              />
              <div className=" ml-4 hidden w-full md:block">
                <Link href="/">
                  <div className="btn-red">
                    <a className="py-4 px-8">ĐĂNG KÝ </a>
                  </div>
                </Link>
              </div>
            </div>
            <p
              className="mt-2 max-w-sm text-sm text-gray-500 md:text-base"
              id="email-description"
            >
              Hãy để lại địa chỉ email để nhận thêm nhiều tin tức từ chúng tôi
              nhé.
            </p>
            <div className="block w-full pt-4 md:hidden">
              <Link href="/">
                <div className="btn-red w-full items-center justify-center">
                  <p>ĐĂNG KÝ </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
