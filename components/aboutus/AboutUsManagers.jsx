import React from 'react';
import Title from '../shared/Title';
const managers = [
  {
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image.png',
  },
  {
    name: 'Phoenix Baker',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image8.png',
  },
  {
    name: 'Lana Steiner',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image2.png',
  },
  {
    name: 'Demi Wilkinson',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image3.png',
  },
  {
    name: 'Candice Wu',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image4.png',
  },
  {
    name: 'Natali Craig',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image5.png',
  },
  {
    name: 'Drew Cano',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image6.png',
  },
  {
    name: 'Orlando Diggs',
    role: 'Founder & CEO',
    src: '#',
    imageSrc: '/AboutUs/image7.png',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const AboutUsManagers = () => {
  return (
    <div className="mx-auto bg-gray-50 px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl ">
        <Title str1={'QUẢN LÍ'} str2="ĐỘI NGŨ" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {managers.map((item, index) => (
            <div>
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
  );
};
