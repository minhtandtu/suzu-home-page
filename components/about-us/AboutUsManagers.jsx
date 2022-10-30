import React from 'react';
import Title from '../shared/Title';
const managers = [
  {
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image.png',
  },
  {
    name: 'Phoenix Baker',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image8.png',
  },
  {
    name: 'Lana Steiner',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image2.png',
  },
  {
    name: 'Demi Wilkinson',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image3.png',
  },
  {
    name: 'Candice Wu',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image4.png',
  },
  {
    name: 'Natali Craig',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image5.png',
  },
  {
    name: 'Drew Cano',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image6.png',
  },
  {
    name: 'Orlando Diggs',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/Image7.png',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const AboutUsManagers = () => {
  return (
    <div className="mx-auto bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl ">
        <div className="container mx-auto px-4 ">
          <Title str1={'QUẢN LÍ'} str2="ĐỘI NGŨ" />
          <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4 md:pt-0">
            {managers.map((item, index) => (
              <div key={index}>
                <img
                  src={item.imageSrc}
                  className="aspect-square rounded-lg  "
                ></img>
                <p className="pl-4 text-lg font-medium text-gray-900 md:text-2xl">
                  {item.name}
                </p>
                <p className="pl-4 text-base font-normal text-red-500 md:text-lg">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
