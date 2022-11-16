import React from 'react';
import {ArrowNarrowDownIcon} from '@heroicons/react/solid';
import {useState, useEffect} from 'react';
const teambranch = ['GROUP', 'MUSIC', 'BRAND', 'SOFTWARE', 'FILM', 'STUDIO'];
const Hero = () => {
  if (process.browser) {
    const ref = -100 / teambranch.length;
    const Slider = document.querySelector('.slider');
    const ButtonRed = document.querySelector('.btn-red');
    setInterval(() => {
      Slider.style.transform = 'translate(0,' + ref + '%)';
    }, 2000);

    Slider.addEventListener('transitionend', function () {
      Slider.appendChild(Slider.firstElementChild);
      Slider.style.transition = 'none';
      Slider.style.transform = 'translate(0,0)';
      setTimeout(() => {
        Slider.style.transition = 'all 0.5s';
      });
    });
  }

  return (
    <>
      {/* Hero Section*/}
      <div className="bg-net">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto flex items-center py-8 md:py-12 lg:py-16 2xl:py-24">
            <div
              className="container mx-auto flex
            flex-col-reverse md:mb-6 md:grid md:grid-cols-2 md:gap-x-4"
            >
              {/* Left Box */}
              <div className="max-w-md sm:max-w-2xl lg:flex lg:items-center lg:text-left ">
                <div className="px-4 pb-4">
                  {/* Hello  Suzu Group  section */}
                  <div className="md:mb-8">
                    <div className="text-left md:mb-8">
                      <p className="text-2xl font-semibold leading-3 text-gray-700 md:text-3xl ">
                        Chúng tôi là
                      </p>
                    </div>

                    <div className="flex ">
                      {/* min-w-max: khong cho xuong hang */}
                      <p className="font-anton min-w-max whitespace-nowrap text-left text-6xl  font-normal leading-loose text-red-500 md:text-6xl lg:text-8xl">
                        SUZU&nbsp;
                      </p>
                      <div className="w-full">
                        <div className="slider-container relative h-32 overflow-hidden md:h-36">
                          <div className="carousel">
                            <div className="slider transition-all duration-500 ">
                              {teambranch.map((item, index) => (
                                <div
                                  key={index}
                                  className="mb-28 flex flex-1 flex-shrink-0"
                                >
                                  <p className="text-stroke-2 text-stroke-red font-anton min-w-max flex-shrink-0 whitespace-nowrap text-left text-6xl font-normal leading-loose text-white md:text-6xl lg:text-8xl">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-white to-transparent "></div>
                          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description  */}
                  <div className="w-full ">
                    <p className="text-left  text-sm font-normal text-gray-900 md:text-xl  lg:w-[90%]">
                      Elementum sociis aliquet neque, fames est amet, posuere
                      tincidunt nunc in amet, tristique in a nulla viverra
                      tristique ultrices duis laoreet consectetur bibendum et
                      pulvinar integer tristique massa,
                    </p>
                    <div className="mt-8 hidden w-full md:block">
                      <div className="btn-red">
                        <a>KHÁM PHÁ NGAY</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Box */}
              <div className="mx-auto px-8 pb-8 md:py-0">
                <img className="w-full object-cover" src="/motion.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Truot xuong + bouncing arrow oval box */}
        <div className="relative mx-auto w-full">
          <div className="relative flex h-full w-full flex-col md:justify-start">
            <img className="z-10 mx-auto w-full " src="/eclipse1.png" alt="" />
            <div className="absolute top-8 left-0 z-20 mx-auto flex w-full flex-col md:top-14">
              <div className="mx-auto">
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
