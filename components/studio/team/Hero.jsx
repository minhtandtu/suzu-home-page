import React from 'react';
import TitleNoDash from '../../shared/TitleNoDash';
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
export const Hero = () => {
  return (
    <div className="container mx-auto mt-16 max-w-7xl md:mt-24">
      <div className="container mx-auto grid px-4 md:grid-cols-12 md:gap-4">
        {/* Text Section */}
        <div className="flex py-16 pb-0 md:col-span-7 md:items-center md:py-24 ">
          <div className="flex flex-col justify-center">
            <TitleNoDash str1={'THÔNG TIN'} str2="SUZU STUDIO" />
            <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
              <span className="text-red-500">SuZu Studio</span> chính thức thành
              lập vào năm 2019, hoạt động ở các lĩnh vực nghệ thuật và mỹ thuật.
            </p>
          </div>
        </div>
        {/* Logo Section */}
        <div className="flex flex-col items-end justify-center py-8 md:col-span-5">
          <img
            src="/Studio/suzu.png"
            className="mb-4 w-full object-contain md:h-40 md:w-auto"
          ></img>
          <img src="/Studio/studio.png" className="h-40 object-contain"></img>
        </div>
      </div>
    </div>
  );
};
