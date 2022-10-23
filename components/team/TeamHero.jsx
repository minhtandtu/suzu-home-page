import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
const TeamHero = () => {
  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="flex max-w-4xl flex-col justify-center">
          <TitleNoDash str1={'ĐỘI NGŨ'} str2={'CỦA CHÚNG TÔI'} />
          <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
            Với sự giàu có kinh nghiệm từ đội ngũ chúng tôi, luôn mong muốn mang
            các giải pháp kịp thời đến các doanh nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
