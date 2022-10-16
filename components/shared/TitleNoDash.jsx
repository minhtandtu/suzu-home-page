import React from 'react';

const TitleNoDash = ({str1, str2}) => {
  return (
    <>
      <p className="font-anton whitespace-nowrap pb-4 text-xl font-normal text-red-500 md:mb-8 md:text-2xl lg:text-4xl ">
        {str1}&nbsp;
        <span className="text-stroke-1 text-stroke-red text-white">{str2}</span>
      </p>
    </>
  );
};

export default TitleNoDash;
