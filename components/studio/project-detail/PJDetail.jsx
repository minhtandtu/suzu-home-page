import React from 'react';
import {Disclosure, Transition} from '@headlessui/react';
import {
  ChevronRightIcon,
  HomeIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/solid';
import {Breadcrumbs, Link, Typography} from '@mui/material';
import Link2 from 'next/link';
import clsx from 'clsx';
import Title from '../../shared/Title';
import ProjectItem from '../../shared/ProjectItem';
const pages = [
  {name: 'Suzu Studio', href: '#', current: false},
  {name: 'Dự án', href: '#', current: false},
  {name: 'Yêu thương tiếp nối', href: '#', current: true},
];
const project = [
  {
    name: 'Yêu thương tiếp nối',
    href: '#',
    decription:
      'MV “Yêu Thương Tiếp Nối” được ZaloPay phát hành trong chiến dịch Tết 2022, nhằm cổ vũ mọi người tiếp tục lạc quan, yêu thương, mạnh mẽ bước tiếp sau một năm đầy biến động và khó khăn. Phong cách minh hoạ tươi sáng của Điều Nhỏ Xíu Xiu khiến tinh thần MV càng trở nên tích cực, đầy sức sống.',
    production: 'https://www.youtube.com',
    yearOfProduction: '2022',
    durationOfProduction: '2 tuần',
    category: 'Video Âm Nhạc, Quảng Cáo',
    client: 'ZaloPay',
    productor: 'SuZu Studio',
    authors: ['Phan Mạnh Quỳnh'],
    singers: ['Mỹ Tâm', 'Phan Mạnh Quỳnh'],
    directors: 'SuZu Studio',
    videoEditors: [
      {name: 'Trương Hy Vọng'},
      {name: 'Suzu Film'},
      {name: 'Suzu Studio'},
      {name: 'Art Team'},
    ],
    animators: ['Nguyen Van A', 'Nguyen Van Be', 'Le Van C'],
    imageUrl: [
      '/Studio/Image.png',
      '/Studio/Image2.png',
      '/Studio/Image3.png',
      '/Studio/image4.png',
      '/Studio/Image5.png',
      '/Studio/Image6.png',
      '/Project/baolanyeuchovua.png',
      '/Project/dieunhobevidai.png',
      '/Project/laco.png',
      '/Project/merrychristmas.png',
      '/Project/muonmanglatuluc.png',
      '/Project/yeuthuongtiepnoi.png',
      '/Project/mm.png',
    ],
  },
];
const Projects = [
  {
    name: 'YÊU THƯƠNG TIẾP NỐI',
    description: 'Music video, Digital Graphic, Marketing',
    branch: 'ZALOPAY',
    imageSrc: '/Project/yeuthuongtiepnoi.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'ĐIỀU NHỎ BÉ VĨ ĐẠI',
    description: 'Visual, Animation, Marketing',
    branch: 'MOMO',
    imageSrc: '/Project/dieunhobevidai.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'MUỘN MÀNG LÀ TỪ LÚC ',
    description: 'Music video, Digital graphic, Marketing.',
    branch: 'MỸ TÂM',
    imageSrc: '/Project/muonmanglatuluc.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

var a = 0;
function ColSpan() {
  if (a == 0) {
    a++;
    return 'col-span-2';
  } else if (a < 2) {
    a++;
    return 'col-span-1';
  } else {
    a = 0;
    return 'col-span-1';
  }
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const PJDetail = () => {
  return (
    <div className="mx-auto pb-16 md:pb-24 2xl:container">
      <img src="/Studio/image9.png" className="w-full object-cover"></img>
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-md  flex-col items-center py-8 text-base font-normal text-gray-500 md:py-11">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            }
            maxItems={3}
            itemsAfterCollapse={2}
          >
            <Link
              className="font-inter text-sm font-medium text-gray-500 hover:text-gray-700"
              underline="none"
              href="/"
            >
              Trang chủ
            </Link>
            {pages.map((item, index) => (
              <Link
                underline="none"
                href={item.href}
                className={classNames(
                  item.current ? 'text-red-700' : 'text-gray-500',
                  'font-inter text-sm font-medium text-gray-500 hover:text-gray-700',
                )}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </Breadcrumbs>
          <h1 className="font-anton my-8 text-4xl font-normal text-gray-900 md:my-11 md:text-5xl">
            {project[0].name}
          </h1>
          <div className="flex">
            <span>Năm: &nbsp;</span>{' '}
            <span className="font-semibold text-gray-700">
              {project[0].yearOfProduction}
            </span>
            <span className="px-4">~</span>
            <span>Thời gian sản xuất: &nbsp;</span>{' '}
            <span className="font-semibold text-gray-700">
              {project[0].durationOfProduction}
            </span>
          </div>
          <div className="flex pt-2 md:pt-4">
            <span>Dịch vụ:&nbsp;</span>
            <span className="font-semibold text-gray-700">
              {project[0].category}
            </span>
          </div>
          {/*BUTTON--> */}
          <div className="pt-5 md:pt-11">
            <Link2 href="/">
              <div className="btn-red flex items-center">
                <a>
                  XEM SẢN PHẨM &nbsp;
                  <ArrowRightIcon className="h-6 w-6 -rotate-45" />
                </a>
              </div>
            </Link2>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-4 grid w-full grid-cols-2 gap-4 ">
          <div className="text-xs font-normal text-gray-500 md:text-base">
            <span>Khách hàng: &nbsp;</span>
            <br />
            <span className="font-semibold text-gray-900 md:text-xl">
              {project[0].client}
            </span>
          </div>

          <div className="text-xs font-normal text-gray-500 md:text-base">
            <span>Sản xuất: &nbsp;</span>
            <br />
            <span className="font-semibold text-gray-900 md:text-xl">
              {project[0].productor}
            </span>
          </div>
          <div className="text-xs font-normal text-gray-500 md:text-base">
            <span>Sáng tác: &nbsp;</span>
            <br />
            <span className="font-semibold text-gray-900 md:text-xl">
              {project[0].authors}
            </span>
          </div>
          <div className="text-xs font-normal text-gray-500 md:text-base">
            <span>Trình bày: &nbsp;</span>
            <br />
            {project[0].singers.map((item, index) => (
              <span
                className="font-semibold text-gray-900 md:text-xl"
                key={index}
              >
                {item} <br />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <Disclosure>
          <Transition
            enter="transition duration-700 ease-out"
            enterFrom="transform -translate-y-1"
            enterTo="transform translate-y-0"
            leave="transition duration-100 ease-in"
            leaveFrom="transform translate-y-0"
            leaveTo="transform -translate-y-1"
          >
            <Disclosure.Panel>
              <div className="grid w-full grid-cols-2 gap-4 text-left">
                <div className="text-xs font-normal text-gray-500 md:text-base">
                  <span>Đạo diễn: &nbsp;</span>
                  <br />
                  <span className="font-semibold text-gray-900 md:text-xl">
                    {project[0].directors}
                  </span>
                </div>

                <div className="text-xs font-normal text-gray-500 md:text-base">
                  <span>Editor: &nbsp;</span>
                  <br />
                  {project[0].videoEditors.map((item, index) => (
                    <span
                      className="font-semibold text-gray-900 md:text-xl"
                      key={index}
                    >
                      {item.name} <br />
                    </span>
                  ))}
                </div>
                <div className="text-xs font-normal text-gray-500 md:text-base">
                  <span>Animator: &nbsp;</span>
                  <br />
                  {project[0].animators.map((item, index) => (
                    <span
                      className="font-semibold text-gray-900 md:text-xl"
                      key={index}
                    >
                      {item} <br />
                    </span>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>

          <Disclosure.Button>
            <div className="rounded-lg text-red-500 hover:bg-red-100 hover:text-red-700">
              <p className="mb-4 px-4 py-2 text-sm font-medium md:mb-8 md:text-base">
                THÔNG TIN ĐẦY ĐỦ +
              </p>
            </div>
          </Disclosure.Button>
        </Disclosure>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 h-2 bg-gray-100 md:mb-8"></div>
        <div className="mb-4 px-4 md:mb-8">
          <p className="text-left text-base text-gray-900 md:text-xl">
            {project[0].decription}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 px-4 pt-4 md:gap-4 md:pt-8">
        {project[0].imageUrl.map((item, index) => (
          <img
            key={index}
            src={item}
            className={clsx(
              'col-span-1 aspect-video w-full object-cover',
              ColSpan(),
            )}
          ></img>
        ))}
      </div>
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="mx-auto flex flex-col md:items-center">
          <Title str1={'DỰ ÁN'} str2="LIÊN QUAN" />
        </div>
        <div className="mx-auto grid w-full gap-1 sm:grid-cols-2 md:grid-cols-3 md:px-1">
          {Projects.map((project) => (
            <ProjectItem
              key={project}
              project={project}
              aspect={'aspect-4/3'}
            />
          ))}
        </div>
        {/*BUTTON--> */}
        <div className="mx-auto flex justify-center pt-5 md:pt-11 ">
          <Link2 href="/">
            <div className="btn-red">
              <a>
                <ArrowLeftIcon className="mt-1 h-4 w-4" />
                &nbsp;QUAY LẠI TRANG DỰ ÁN
              </a>
            </div>
          </Link2>
        </div>
      </div>
    </div>
  );
};
