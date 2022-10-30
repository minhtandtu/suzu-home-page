import React from 'react';
import {ArrowNarrowDownIcon} from '@heroicons/react/solid';
const Hero = () => {
  return (
    <>
      {/* Hero Section*/}
      <div className="mx-auto 2xl:container">
        <div className="relative min-h-screen">
          <video
            autoPlay
            loop
            muted
            className="min-h-screen w-full object-cover"
          >
            <source src="/TeenTitan.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="px-16 text-center">
              <h1 className="font-anton text-7xl font-normal tracking-tight text-white md:text-8xl ">
                SUZU STUDIO
                <div className="px-8 pt-8 md:px-12 md:pt-12">
                  <div className="h-1 bg-white md:h-2"></div>
                </div>
              </h1>
            </div>
          </div>
          {/* Truot xuong + bouncing arrow oval box */}
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full">
            <div className="relative flex h-full w-full flex-col md:justify-start">
              <img className="z-10 w-full  " src="/whiteOval.png" alt="" />
              <div className="absolute top-8 left-0 z-20 mx-auto flex w-full flex-col md:top-14">
                <div className="mx-auto">
                  <p className="text-xs font-normal text-gray-500">
                    Trượt xuống
                  </p>
                </div>
                <div className="mx-auto">
                  <ArrowNarrowDownIcon className="animate-slideDown h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div className="h-14 bg-white pt-10 md:hidden">
                <div className="bottom-0 z-20 mx-auto h-[5px] w-[50%] rounded-[100px] bg-black "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
