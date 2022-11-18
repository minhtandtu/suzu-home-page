import React from 'react';
import Rating from '../shared/Rating';
const TestimonialItem = ({item}) => {
  return (
    <>
      <div className="mx-auto h-96 w-full rounded-lg bg-white shadow-lg md:m-4">
        <div className="flex w-full flex-col items-center justify-center space-y-3 py-12 px-4 text-center md:px-20">
          <p className="mb-8 text-xl font-normal text-gray-900 md:text-3xl">
            {item.comment}
          </p>
          <img
            src={item.avatar}
            alt="avatar"
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <p className="text-gray-900 md:text-lg md:font-semibold ">
            {item.authorName}
          </p>
          <p className="text-gray-500 md:text-base md:font-normal">
            {item.role}
          </p>
          <Rating rateNum={item.rating} />
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
