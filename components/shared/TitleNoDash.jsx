import React from 'react';

const TitleNoDash = ({str1, str2}) => {
  return (
    <>
      <p className="font-anton whitespace-nowrap pb-4 text-4xl font-normal text-red-500 md:mb-8 md:text-5xl lg:text-6xl ">
        {str1}&nbsp;
        <span className="text-stroke-2 text-stroke-red text-white">{str2}</span>
      </p>
    </>
  );
};

export default TitleNoDash;
