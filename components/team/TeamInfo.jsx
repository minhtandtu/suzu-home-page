import React from 'react';
import {ChevronRightIcon, ArrowRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
const teaminfo = [
  {
    name: 'SuZu Studio',
    logo: '/Logo/logoStudio.png',
    description: 'Description of the team field',
    major1: 'Minh hoạ / Truyện tranh cộng đồng',
    major2: 'Hoạt hình',
    major3: 'Video âm nhạc',
    major4: 'Truyện tranh',
    post_src: '/',
    featureImageSrc: '/Team/studio.png',
  },
  {
    name: 'Social Film',
    logo: '/Logo/logoFilm.png',
    description: 'Description of the team field',
    major1: 'Minh hoạ / Truyện tranh cộng đồng',
    major2: 'Hoạt hình',
    major3: 'Video âm nhạc',
    major4: 'Truyện tranh',
    post_src: '/',
    featureImageSrc: '/Team/film.png',
  },
  {
    name: 'Social Brand',
    logo: '/Logo/logoBrand.png',
    description: 'Description of the team field',
    major1: 'Minh hoạ / Truyện tranh cộng đồng',
    major2: 'Hoạt hình',
    major3: 'Video âm nhạc',
    major4: 'Truyện tranh',
    post_src: '/',
    featureImageSrc: '/Team/brand.png',
  },
  {
    name: 'SuZu Music',
    logo: '/Logo/logoMusic.png',
    description: 'Description of the team field',
    major1: 'Minh hoạ / Truyện tranh cộng đồng',
    major2: 'Hoạt hình',
    major3: 'Video âm nhạc',
    major4: 'Truyện tranh',
    post_src: '/',

    featureImageSrc: '/Team/music.png',
  },
  {
    name: 'Suzu Software',
    logo: '/Logo/logoSoftware.png',
    description: 'Description of the team field',
    major1: 'Minh hoạ / Truyện tranh cộng đồng',
    major2: 'Hoạt hình',
    major3: 'Video âm nhạc',
    major4: 'Truyện tranh',
    post_src: '/',
    featureImageSrc: '/Team/software.png',
  },
  {
    name: 'Social Brand2',
    logo: '/Logo/logoStudio.png',
    description: 'Description of the team field',
    major1: 'Minh hoạ / Truyện tranh cộng đồng',
    major2: 'Hoạt hình',
    major3: 'Video âm nhạc',
    major4: 'Truyện tranh',
    post_src: '/',
    featureImageSrc: '/Team/brand.png',
  },
];
const pages = [{name: 'Team', href: '#', current: true}];
const TeamInfo = () => {
  return (
    <div className="mx-auto bg-gray-50 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Text Section */}
        <div className="scrums  md:mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <Link href="/">
                  <a className="text-sm font-medium text-gray-500 hover:text-gray-500">
                    Trang chủ
                    <span className="sr-only">Home</span>
                  </a>
                </Link>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-end">
                    <ChevronRightIcon
                      className="h-7 w-7 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className="ml-2 text-sm font-medium text-red-700 hover:text-gray-900"
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
      {/* Text & Img */}
      <div className="mx-auto space-y-8  px-4 lg:space-y-28 lg:px-0  2xl:container">
        {teaminfo.map((item) => (
          <div
            key={item.name}
            className=" group flex flex-col-reverse space-y-4 pb-4 lg:flex-row lg:pb-8 lg:even:flex-row-reverse"
          >
            {/* BOX 1 */}
            <div className="aspect-4/3 overflow-hidden lg:w-1/2">
              <img
                src={item.featureImageSrc}
                className="aspect-4/3 w-full rounded-r-xl object-cover group-even:rounded-l-xl group-even:rounded-r-none "
              ></img>
            </div>
            {/* BOX 2 */}
            <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
              <div className="relative h-[80%] w-full ">
                <div
                  className="inset-y-0 right-0 w-full rounded-lg bg-gray-50 backdrop-blur group-odd:-left-[10%] group-even:-right-[10%] lg:absolute  lg:rounded-lg lg:border lg:border-gray-100
                 lg:bg-white/80 lg:py-1 lg:pl-4 lg:shadow-xl xl:p-8 "
                >
                  <div className="flex h-full flex-col justify-between space-y-4 lg:space-y-1 xl:space-y-4 ">
                    <div className="lg:flex  ">
                      <img
                        alt="logoteam"
                        src={item.logo}
                        className="mr-4 aspect-square h-16 max-h-32 w-auto rounded-xl bg-white/90 object-cover sm:h-24 md:mr-8 md:h-20 xl:h-28"
                      ></img>
                      <div className="flex flex-col justify-between  py-2 lg:py-4">
                        <p className="text-2xl font-semibold text-gray-900 md:text-3xl">
                          {item.name}
                        </p>
                        <p className="text-sm font-normal text-gray-500 md:text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-red-100 p-2">
                        <img
                          src="/Icon/tick.svg"
                          className="h-2 object-cover lg:h-3"
                        ></img>
                      </div>
                      <p>{item.major1}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-red-100 p-2">
                        <img
                          src="/Icon/tick.svg"
                          className="h-2 object-cover lg:h-3"
                        ></img>
                      </div>
                      <p>{item.major2}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-red-100 p-2">
                        <img
                          src="/Icon/tick.svg"
                          className="h-2 object-cover lg:h-3"
                        ></img>
                      </div>
                      <p>{item.major3}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-2 rounded-full bg-red-100 p-2">
                        <img
                          src="/Icon/tick.svg"
                          className="h-2 object-cover lg:h-3"
                        ></img>
                      </div>
                      <p>{item.major4}</p>
                    </div>

                    <div className="pb-4">
                      <Link href="/">
                        <div className="btn-gray whitespace-nowrap">
                          <p>
                            XEM CHI TIẾT{' '}
                            <ArrowRightIcon className="h-6 -rotate-45 pl-2 md:h-7 " />
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
