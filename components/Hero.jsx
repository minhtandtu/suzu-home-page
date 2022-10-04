import React from 'react';
import {ArrowNarrowDownIcon} from '@heroicons/react/solid';
const Hero = () => {
  return (
    <>
      {/* Hero Section*/}
      <div className="bg-net mx-auto max-w-[1530px]">
        <div className="mx-auto">
          {/*spaceholder for top menu */}
          {/* Không xóa thẻ div bên dưới */}
          <div className="container h-14 sm:py-16  md:h-20 md:py-24 lg:py-32"></div>
          <div className="container mx-auto flex items-center 2xl:max-w-7xl">
            <div className="flex w-full flex-col-reverse  md:-mt-24 md:mb-6 md:grid md:grid-cols-2 md:gap-x-4">
              {/* Left Box */}
              <div className="max-w-md sm:max-w-2xl lg:flex lg:items-center lg:text-left ">
                <div className=" px-4">
                  {/* Hello  Suzu Group  section */}
                  <div className="md:mb-8">
                    <div className=" text-left md:mb-8">
                      <p className=" text-2xl font-semibold leading-3 text-gray-700 md:text-3xl ">
                        Chúng tôi là
                      </p>
                    </div>

                    <div className="flex">
                      {/* min-w-max: khong cho xuong hang */}
                      <p className="font-anton  min-w-max whitespace-nowrap text-left text-6xl  font-normal leading-loose text-red-500 md:text-6xl lg:text-8xl">
                        SUZU{' '}
                        <span className="text-stroke-2 text-stroke-red text-white">
                          GROUP
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Description  */}
                  <div className="w-full">
                    <p className="text-left  text-sm font-normal text-gray-900 md:text-xl  lg:w-[90%]">
                      Elementum sociis aliquet neque, fames est amet, posuere
                      tincidunt nunc in amet, tristique in a nulla viverra
                      tristique ultrices duis laoreet consectetur bibendum et
                      pulvinar integer tristique massa,
                    </p>
                    <div className="mt-8 hidden w-full  sm:flex   ">
                      <button
                        className=" w-full rounded-md bg-red-500  py-2   px-4 text-base font-medium text-white duration-500 
             hover:bg-red-700 sm:w-auto "
                      >
                        KHÁM PHÁ NGAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Box */}
              <div className="mx-auto py-12 px-8 md:py-0">
                <img className="w-full object-cover" src="/motion.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Truot xuong + bouncing arrow oval box */}
        <div className="relative mx-auto w-full max-w-[1530px]">
          <div className="relative flex h-full w-full flex-col md:justify-start">
            <img className="z-10 w-full " src="/oval.svg" alt="" />
            <div className="absolute top-8 left-0 z-20 mx-auto flex w-full flex-col md:top-14">
              <div className="mx-auto ">
                <p className="text-xs font-normal text-gray-500">Trượt xuống</p>
              </div>
              <div className="mx-auto">
                <ArrowNarrowDownIcon className="animate-slideDown h-6 w-6 text-gray-500" />
              </div>
            </div>
            <div className="h-14 bg-gray-50 pt-10 md:hidden">
              <div className="bottom-0 z-20 mx-auto h-[5px] w-[50%] rounded-[100px] bg-black "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
