import React from 'react';

const Title = ({str1, str2}) => {
  return (
    <>
      <p className="font-anton whitespace-nowrap pb-4 text-4xl font-normal text-red-500 md:mb-4 md:text-5xl lg:text-6xl ">
        {str1}&nbsp;
        <span className="text-stroke-2 text-stroke-red text-white">{str2}</span>
      </p>
      <div className="mb-4 h-1 w-20 bg-red-500 md:mb-12 md:h-2 md:w-40"></div>
    </>
  );
};

export default Title;
