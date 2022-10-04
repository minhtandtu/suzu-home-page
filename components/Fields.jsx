import React from 'react';
import Title from './Title';
import Image from 'next/image';
const fields = [
  {
    name: 'Phương tiện & Nghệ Thuật',
    img: '/FieldImage/PhuongtienNgheThuat.svg',
  },
  {name: 'B2B', img: '/FieldImage/B2B.svg'},
  {name: 'Giải trí & Truyền thông', img: '/FieldImage/GiaitriTruyenthong.svg'},
  {name: 'Công nghệ thông tin', img: '/FieldImage/Congnghethongtin.svg'},
  {name: 'Phi lợi nhuận', img: '/FieldImage/Philoinhuan.svg'},
  {name: 'Bán lẻ', img: '/FieldImage/Banle.svg'},
];
const Fields = () => {
  return (
    <>
      <div className="container mx-auto  py-8 px-4 md:py-16 lg:py-24">
        <div className="mx-auto flex flex-col items-center justify-center">
          {/* Big Title */}
          <Title str1={'LĨNH VỰC'} str2="HOẠT ĐỘNG" />
          <div className="grid w-full space-x-4 space-y-4 md:grid-cols-3">
            {fields.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center space-y-4"
              >
                <Image
                  key={item.name}
                  src={item.img}
                  width="268px"
                  height="268px"
                  className="object-cover"
                />
                <p className="text-xl font-semibold text-gray-900 md:text-3xl">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fields;
