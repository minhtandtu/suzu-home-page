import React from 'react';

const Title = ({str1, str2}) => {
  return (
    <>
      <div
        className="font-anton flex flex-wrap whitespace-normal pb-4 text-4xl font-normal
        leading-[4rem] tracking-tight text-red-500 md:mb-4 md:text-5xl lg:text-6xl"
      >
        <span className="whitespace-nowrap ">{str1}&nbsp;</span>
        <span className="text-stroke-2 text-stroke-red whitespace-nowrap   text-white">
          {str2}
        </span>
      </div>
      <div className="mb-4 h-1 w-20 bg-red-500 md:mb-12 md:h-2 md:w-40"></div>
    </>
  );
};

export default Title;
