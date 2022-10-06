import React from 'react';
import Title from '../shared/Title';
import Image from 'next/image';
import '@splidejs/splide/css/core';
// import '@splidejs/react-splide/css/sea-green';
import {Splide, SplideSlide} from '@splidejs/react-splide';
const works = [
  {
    name: 'Xây dựng thương hiệu',
    des: 'Chúng tôi là chuyên gia xây dựng hình ảnh phù hợp cho doanh nghiệp của bạn để đảm bảo khách hàng tiềm năng chọn bạn hơn đối thủ cạnh tranh.',
    img: '/WorkImage/Branding.svg',
  },
  {
    name: 'Thiết kế đồ họa',
    des: 'Chúng tôi có thể giúp củng cố thương hiệu của bạn bằng việc xây dựng cộng đồng hoặc thiết kế các tài liệu tiếp thị để mang lại ấn tượng lâu dài với khách hàng.',
    img: '/WorkImage/Graphics.svg',
  },
  {
    name: 'Truyền thông xã hội',
    des: 'Chúng tôi có thể quảng bá thương hiệu của bạn để kết nối với khách hàng tiềm năng bằng nhiều hình thức truyền thông kỹ thuật số.',
    img: '/WorkImage/Media.svg',
  },
];
const workSlides = [
  {name: 'Ad', img: '/WorkImage/Slide-Ad.svg'},
  {name: 'film', img: '/WorkImage/Slide-film.svg'},
  {name: 'media', img: '/WorkImage/Slide-media.svg'},
  {name: 'software', img: '/WorkImage/Slide-software.svg'},
  {name: 'ad2', img: '/WorkImage/Slide-Ad.svg'},
];

const Works = () => {
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          {/* Big title */}
          <div className="mx-auto flex flex-col items-center justify-center">
            <Title str1={'CHÚNG TÔI'} str2={'LÀM GÌ'} />
          </div>
          {/* Content */}
          <div className="flex  flex-wrap items-center justify-center space-x-8 md:flex-nowrap">
            {works.map((item) => (
              <div
                key={item.name}
                className="flex max-w-md flex-col items-center justify-center"
              >
                <Image
                  src={item.img}
                  height="402px"
                  width="268px"
                  className="object-cover"
                />
                <p className=" text-xl font-semibold text-gray-900 md:text-3xl">
                  {item.name}
                </p>
                <p className=" text-sm font-normal text-gray-700 md:text-base">
                  {item.des}
                </p>
              </div>
            ))}
          </div>
          {/* Slider */}
          <div className="mt-9 flex items-center justify-center md:px-20">
            <Splide
              options={{
                type: 'loop',
                gap: '1rem',
                perPage: 4,
                breakpoints: {
                  1024: {perPage: 3, gap: '1rem'},
                  768: {perPage: 2, gap: '1rem'},
                  640: {perPage: 1, gap: 0},
                  380: {perPage: 1, gap: 0},
                },
                classes: {
                  prev: 'splide__arrow--prev work-prev',
                  next: 'splide__arrow--next work-next',
                },
              }}
              aria-label="My Favorite Images2"
            >
              {workSlides.map((item) => (
                <SplideSlide key={item.name}>
                  <img
                    src={item.img}
                    width="233px"
                    height="244px"
                    alt="Imageslide"
                    className="mx-auto object-cover "
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
