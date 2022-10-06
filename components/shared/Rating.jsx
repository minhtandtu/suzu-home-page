import React from 'react';
import {StarIcon} from '@heroicons/react/solid';

const Rating = ({rateNum}) => {
  const arr = [];
  for (let i = 0; i < rateNum; i++) {
    arr[i] = i;
  }
  return (
    <>
      <div className="rating mx-auto flex   h-full items-center justify-center align-middle">
        {arr.map((item, index) => (
          <StarIcon key={index} className="h-6 w-6 text-[#FEC84B]" />
        ))}
      </div>
    </>
  );
};

export default Rating;
