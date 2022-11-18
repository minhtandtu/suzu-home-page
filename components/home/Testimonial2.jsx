import React, {useEffect, useState} from 'react';
import TestimonialItem from '../shared/TestimonialItem';
import {ChevronLeftIcon} from '@heroicons/react/solid';
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
    authorName: 'Christiano Ronaldo',
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
  {
    authorName: 'Figo',
    avatar: '/Avatar/kelly.png',
    role: 'Head of Design, Layer',
    rating: 5,
    comment:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
  },
  {
    authorName: 'Van Persi',
    avatar: '/Avatar/ronaldo.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Messi, we are friend, but I have to say that I play football better than him.',
  },
  {
    authorName: 'Ibrahamovic',
    avatar: '/Avatar/messi.png',
    role: 'Football player',
    rating: 6,
    comment: 'I am the King.',
  },
  {
    authorName: 'Luis Suares',
    avatar: '/Avatar/kelly.png',
    role: 'Head of Design, Layer',
    rating: 5,
    comment:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
  },
];
var r1 = [1, 2, 3, 4, 5, 6, 7];

const Testimonial = () => {
  const [arrState, setArrState] = useState(testimonial);

  function handleClick(direction) {
    const Test2Slider = document.querySelector('.testimonial-slider2');
    if (direction === 1) {
      Test2Slider.style.transform = 'translate(-768px)';
      Test2Slider.addEventListener('transitionend', function () {
        setArrState((prevState) => [
          ...prevState.slice(1, prevState.length),
          prevState[0],
        ]);
        console.log('State: ' + arrState);
        Test2Slider.style.transition = 'none';
        Test2Slider.style.transform = 'translate(0,0)';
        setTimeout(() => {
          Test2Slider.style.transition = 'all 0.5s';
        });
      });
    } else {
      Test2Slider.style.transform = 'translate(768px)';
      Test2Slider.addEventListener('transitionend', function () {
        setArrState((prevState) => [
          prevState[prevState.length - 1],
          ...prevState.slice(0, prevState.length - 1),
        ]);
        console.log('State: ' + arrState);
        Test2Slider.style.transition = 'none';
        Test2Slider.style.transform = 'translate(0,0)';
        setTimeout(() => {
          Test2Slider.style.transition = 'all 0.5s';
        });
      });
    }
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      {console.log('RenderUI')}
      {/* Đánh Giá Từ Khách Hàng */}
      <div className="flex flex-col items-center justify-center">
        <Title str1={'ĐÁNH GIÁ TỪ'} str2={'KHÁCH HÀNG'} />
      </div>
      {/* SLIDE */}
      {/* <div className="relative mx-auto h-96  px-4">
        <div className="testi-slider1 mx-auto flex justify-center overflow-hidden transition-all duration-500">
          {arrState.map((item, index) => (
            <div
              key={index}
              className={`mx-auto flex w-[1080px] flex-shrink-0  ${
                index === 3 ? 'scale-105 opacity-100' : ' scale-90 opacity-70 '
              }`}
            >
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>
      </div> */}
      {/*  */}
      <div className="testimonial-container2  h-96 w-full  p-4">
        <div className="testimonial-carousel2 relative  h-full p-4">
          <div className="absolute inset-y-0 z-10 mx-auto mb-8 flex w-full items-center">
            <div className="mx-auto flex w-[1000px] justify-between pr-8">
              <button
                className="btn-back rounded-md bg-white px-3 py-3 shadow-lg hover:bg-gray-200"
                onClick={() => handleClick(2)}
              >
                <ChevronLeftIcon className="h-10 w-10 text-gray-900 " />
              </button>
              <button
                className="btn-next rounded-md bg-white px-3 py-3 shadow-lg hover:bg-gray-200"
                onClick={() => handleClick(1)}
              >
                <ChevronLeftIcon className="h-10 w-10 rotate-180 text-gray-900 " />
              </button>
            </div>
          </div>
          <div className="testimonial-slider2 flex h-full w-full flex-shrink-0 items-center justify-center transition-all duration-500">
            {arrState.map((item, index) => (
              <div
                key={index}
                className={`mx-auto flex w-[768px] flex-shrink-0 justify-center text-lg ${
                  index === 3
                    ? 'scale-105 opacity-100'
                    : ' scale-90 opacity-70 '
                }`}
              >
                <TestimonialItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
