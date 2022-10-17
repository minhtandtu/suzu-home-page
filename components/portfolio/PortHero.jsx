import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
import Image from 'next/image';
const logo = [
  {
    name: '1',
    imgUrl: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg',
    alt: 'Workcation',
  },

  {
    name: '2',
    imgUrl: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    alt: 'Mirage',
  },
  {name: 'metup', imgUrl: '/Logo/logoMeHup.png', alt: 'logo'},
  {name: 'loctroi', imgUrl: '/Logo/logoLocTroi.png', alt: 'logo'},
  {
    name: '3',
    imgUrl: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
    alt: 'Tuple',
  },
  {
    name: '4',
    imgUrl: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg',
    alt: 'Laravel',
  },
  {name: 'tsp', imgUrl: '/Logo/logoTSP.png', alt: 'logo'},
  {name: 'thelist', imgUrl: '/Logo/logoTheList.png', alt: 'logo'},
  {
    name: '5',
    imgUrl: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit',
  },
  {name: 'box', imgUrl: '/Logo/logoBoxStudio.png', alt: 'logo'},
  {name: 'z', imgUrl: '/Logo/logoZ.png', alt: 'logo'},

  {
    name: '6',
    imgUrl: 'https://tailwindui.com/img/logos/statamic-logo-gray-400.svg',
    alt: 'Statamic',
  },
  {
    name: '7',
    imgUrl: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg',
    alt: 'Workcation',
  },
  {name: '10', imgUrl: '/Logo/logoLava.png', alt: 'logo'},
  {name: 'brain', imgUrl: '/Logo/logoBrainad.png', alt: 'logo'},
  {
    name: '8',
    imgUrl: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    alt: 'Mirage',
  },
];
export const PortHero = () => {
  return (
    <div className="container mx-auto max-w-7xl py-4">
      <div className="container mx-auto grid px-4 md:grid-cols-12 md:gap-4">
        {/* Text Section */}
        <div className="py-8 md:col-span-7 md:py-16 lg:py-24 ">
          <div className="flex max-w-4xl flex-col justify-center">
            <TitleNoDash str1={'DỰ ÁN'} str2="CỦA CHÚNG TÔI" />
            <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
              Chúng tôi làm việc với khách hàng để cung cấp các giải pháp sáng
              tạo thúc đẩy tương tác.
            </p>
          </div>
        </div>
        {/* Logo Section */}
        <div className="md:col-span-5">
          <div className="relative flow-root">
            <div className="scrollbar-hide relative mx-auto box-content h-96 overflow-y-auto md:h-[31rem]">
              <div className="absolute inset-x-0 mt-6 grid grid-cols-2  gap-4  lg:mt-8">
                {logo.map((item) => (
                  <div className="w-full even:mt-8" key={item.name}>
                    <img
                      className="mx-auto h-16"
                      src={item.imgUrl}
                      alt={item.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 left-0 h-28 w-full bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
