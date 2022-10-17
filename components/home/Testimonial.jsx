import React from 'react';
import '@splidejs/splide/css/core';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import TestimonialItem from '../shared/TestimonialItem';
import Title from '../shared/Title';
const testimonial = [
  {
    authorName: 'Kelly Williams',
    avatar: '/Avatar/kelly.png',
    role: 'Head of Design, Layer',
    rating: 5,
    comment:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
  },
  {
    authorName: 'Christiano',
    avatar: '/Avatar/ronaldo.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Messi, we are friend, but I have to say that I play football better than him.',
  },
  {
    authorName: 'Messi',
    avatar: '/Avatar/messi.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Ronaldo, we are friend, but I have to say that I play football better than him.',
  },
];
const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      {/* Đánh Giá Từ Khách Hàng */}
      <div className="flex flex-col items-center justify-center">
        <Title str1={'ĐÁNH GIÁ TỪ'} str2={'KHÁCH HÀNG'} />
      </div>
      {/* SLIDE */}
      <div className="container relative mx-auto flex w-full justify-between px-4 md:px-1">
        <div className="hidden h-96 rounded-lg py-8 pr-12 md:block"></div>
        <div className="page w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <Splide
            options={{
              type: 'loop',
              // padding: '15rem',

              classes: {
                pagination: 'splide__pagination pagin',
                page: 'splide__pagination__page page',
              },
            }}
            aria-label="My Favorite Images"
          >
            {testimonial.map((item, index) => (
              <SplideSlide key={index}>
                <TestimonialItem item={item} />
              </SplideSlide>
            ))}
            {/* <ul className="splide__pagination relative z-50 h-96 w-96 bg-red-300"></ul> */}
          </Splide>
        </div>
        <div className="hidden h-96 rounded-lg py-8 pl-12 md:block "></div>
      </div>
    </div>
  );
};

export default Testimonial;
