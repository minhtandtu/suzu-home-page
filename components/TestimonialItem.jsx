import React from 'react';
import Rating from './Rating';
const TestimonialItem = ({item}) => {
  return (
    <>
      <div className="rounded-lg bg-white shadow-lg md:m-4 ">
        <div className="items-center space-y-3 py-12 px-4 text-center">
          <p className="mb-8 text-xl font-normal text-gray-900">
            {item.comment}
          </p>
          <img
            src={item.avatar}
            alt="avatar"
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <p>{item.authorName}</p>
          <p>{item.role}</p>
          <Rating rateNum={item.rating} />
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="h-6 w-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
  />
</svg>;
