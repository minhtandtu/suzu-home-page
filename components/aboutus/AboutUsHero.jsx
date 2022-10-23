import React from 'react';
import TitleNoDash from '../shared/TitleNoDash';
const AboutUsHero = () => {
  return (
    <div className="">
      <div className="container mx-auto max-w-7xl">
        {/* Text Section */}
        <div className="container mx-auto py-16 px-4 md:pb-32">
          <div className="flex max-w-4xl flex-col justify-center">
            <TitleNoDash str1={'CHÚNG TÔI'} str2="LÀ AI" />
            <p className="text-3xl font-normal tracking-tight text-gray-900 lg:text-5xl">
              Chúng tôi là những nhà đổi mới và luôn cố gắng đi trước với sự
              tiến bộ trong cả ngành công nghiệp và công nghệ.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto 2xl:container">
        <img
          src="/AboutUs/HeroImage.png"
          className="object-cover"
          alt="image"
        ></img>
      </div>
    </div>
  );
};

export default AboutUsHero;
