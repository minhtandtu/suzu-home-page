import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
import Image from 'next/image';
import Link from 'next/link';
const RecruHero = () => {
  return (
    <div className="mx-autopy-8 md:py-16 lg:py-24">
      <div className="max-w-7xlpx-4 container mx-auto ">
        {/* Text Section */}
        <div className="py-8  md:py-16 lg:py-24 ">
          <div className="flex max-w-4xl flex-col justify-center">
            <TitleNoDash str1={'TUYỂN DỤNG'} str2="SUZU GROUP" />
            <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
              Chào mừng bạn đến trang tuyển dụng của{' '}
              <span className="text-red-500">SuZu Group . </span> Chúng tôi luôn
              tìm kiếm tài năng và quan điểm mới.
            </p>
            <div className="mt-8 flex md:mt-16 md:hidden">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full max-w-sm rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:text-base"
                placeholder="Nhập địa chỉ email của bạn"
                aria-describedby="email-description"
              />
            </div>
            <p
              className="mt-2 max-w-sm text-sm text-gray-500 md:hidden md:text-base"
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
      <div className="mx-autopy-8 md:py-16 lg:py-24 2xl:container">
        <img
          src="/Recruitment/image.png"
          className="object-cover"
          alt="image"
        ></img>
      </div>
    </div>
  );
};

export default RecruHero;
