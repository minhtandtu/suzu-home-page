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
    <>
      {/* Testimonial section */}
      <div className="bg-gray-50">
        <div className=" mx-auto  py-8 sm:py-16 md:py-24">
          <div className="mx-auto px-4 md:px-0">
            {/* Đánh Giá Từ Khách Hàng */}
            <div className="flex flex-col items-center justify-center">
              <Title str1={'ĐÁNH GIÁ TỪ'} str2={'KHÁCH HÀNG'} />
            </div>
            {/* SLIDE */}
            <div className="relative flex w-full justify-between px-8 md:px-0">
              <div className="hidden h-96 rounded-lg py-8 pr-12 md:block">
                <div className="h-full bg-white/50 pr-8 pt-10 ">
                  <p className="text-center text-xl font-normal text-gray-900/50">
                    Love the simplicity of the service and the prompt customer
                    support. We cant imagine working without it.
                  </p>
                </div>
              </div>
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
              <div className="hidden h-96 rounded-lg py-8 pl-12 md:block ">
                <div className="h-full bg-white/50 pl-8 pt-10">
                  <p className="text-center text-xl font-normal text-gray-900/50">
                    Love the simplicity of the service and the prompt customer
                    support. We cant imagine working without it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
