import React from 'react';
import Title from '../shared/Title';
import Image from 'next/image';
const fields = [
  {
    name: 'Phương tiện & Nghệ Thuật ',
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
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          {/* Big Title */}
          <Title str1={'LĨNH VỰC'} str2="HOẠT ĐỘNG" />
          <div className="grid w-full gap-4 md:grid-cols-3">
            {fields.map((item) => (
              <div key={item.name} className="text-center">
                <div className="mx-auto max-w-fit">
                  <Image
                    key={item.name}
                    src={item.img}
                    width="268px"
                    height="268px"
                    className="mx-auto object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-900 md:text-3xl">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
