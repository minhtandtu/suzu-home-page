import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/solid';
import Title from '../../shared/Title';
const leaders = [
  {
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/Studio/Image.png',
  },
  {
    name: 'Phoenix Baker',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/Studio/Image2.png',
  },
  {
    name: 'Lana Steiner',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/Studio/Image3.png',
  },
  {
    name: 'Demi Wilkinson',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/Studio/Image5.png',
  },
  {
    name: 'Candice Wu',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/Studio/Image6.png',
  },
  {
    name: 'Natali Craig',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/Studio/Image7.png',
  },
];

const pages = [
  {name: 'Đội ngũ', href: '#', current: false},
  {name: 'Suzu Studio', href: '#', current: false},
  {name: 'Về studio', href: '#', current: true},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AboutTeam = () => {
  return (
    <div className="bg-gray-50">
      <div
        className="container mx-auto max-w-7xl 
    py-16 px-4 md:py-24"
      >
        <div className="container max-w-3xl space-y-5 md:space-y-8">
          <nav className="hidden md:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="#" className="text-gray-400 hover:text-red-700">
                    Trang chủ
                    {/* <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  /> */}
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className={classNames(
                        page.current ? 'text-red-700' : 'text-gray-500',
                        'ml-4 text-sm font-medium text-gray-500 hover:text-red-700',
                      )}
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-xl font-semibold tracking-tight text-gray-700 md:text-4xl">
            Về đội ngũ chúng tôi
          </h1>
          <p className="text-sm font-normal text-gray-700 md:text-xl">
            <span className="text-red-500">SuZu Studio</span> được thành lập vào
            năm 2019 và hoạt động cho đến nay, nhưng các thành viên đã hoạt động
            với nhau từ năm 2017.
            <br />
            <br /> Chúng tôi là một đội ngũ trẻ trung, năng động, nhiều màu sắc
            và luôn muốn lan tỏa những thông điệp tích cực đến cộng đồng.
          </p>
        </div>
        <div className="container flex py-16 md:py-24">
          <div className="w-2/3 pr-2">
            <img
              src="/Studio/team1.png"
              className="aspect-square h-full rounded-lg object-cover shadow-sm"
            ></img>
          </div>
          <div className="w-1/3 ">
            <img
              src="/Studio/team2.png"
              className="aspect-square w-full rounded-lg object-cover pb-1"
            ></img>
            <img
              src="/Studio/team3.png"
              className="aspect-square w-full rounded-lg object-cover pt-1"
            ></img>
          </div>
        </div>
        <div className="container max-w-3xl">
          <p className="text-sm font-normal text-gray-900 md:text-xl">
            Xuất phát điểm với hệ thống page comic cộng đồng đa dạng về đề tài
            và phong cách như:
            <span className="font-bold"> Điều Nhỏ Xíu Xiu</span> (cổ vũ),{' '}
            <span className="font-bold">Chị Chị Em Em</span> (giải trí),{' '}
            <span className="font-bold">Xanh Mượt</span> (tình yêu),{' '}
            <span className="font-bold"> Về Ăn Cơm</span> (gia đình),{' '}
            <span className="font-bold">Biết Gì Hôn</span> (kiến thức),{' '}
            <span className="font-bold">Mượt</span>(LGBT+),
            <span className="font-bold"> Hai Chiều</span> (xã hội),... <br />
            <br /> SuZu Studio ngày càng nỗ lực phát triển những sản phẩm art
            chuyên nghiệp hơn như phim & MV hoạt hình, truyện tranh dài kỳ,...
            hứa hẹn cùng tham gia xây dựng tương lai cho hoạt hình & truyện
            tranh Việt Nam.
          </p>
        </div>
      </div>
      <div className="mx-auto 2xl:container">
        <img
          src="/Studio/team4.png"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="container mx-auto max-w-7xl pt-16 md:pt-24">
        <div className="container mx-auto px-4 md:flex">
          <div className="min-w-max md:mr-16">
            <Title str1={'ĐỘI NGŨ'} str2="LÃNH ĐẠO" />
          </div>
          <div className="mt-8  flex flex-wrap justify-between space-y-4 md:mt-0 md:space-y-0">
            {leaders.map((item, index) => (
              <div key={index} className="flex w-full md:w-1/3 md:flex-col">
                <img
                  src={item.imageSrc}
                  className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
                ></img>
                <div className="flex flex-col justify-center pl-4 md:mb-4 md:flex-1 md:pl-0">
                  <p className="text-lg font-medium text-gray-900 ">
                    {item.name}
                  </p>
                  <p className="mt-0 text-base font-normal text-red-500 md:mt-auto">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
