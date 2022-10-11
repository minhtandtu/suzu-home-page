import React from 'react';
import Image from 'next/image';
const ServiceInfo = () => {
  return (
    <div className="space-y-4 bg-gray-50 px-4 py-16 md:space-y-8 md:py-24 lg:py-32">
      <img
        src="/Service/fullwidthimage.png"
        className=" relative mx-auto  object-cover"
      ></img>
      <div className="container mx-auto max-w-7xl text-left">
        <p className="mb-4 text-xl font-semibold text-gray-700 md:mb-6 md:text-3xl">
          Dịch vụ
        </p>
        <div className="text-sm font-normal text-gray-900 md:max-w-3xl md:text-xl">
          SuZu Group là một công ty có trụ sở đặt tại Thành Phố Hồ Chí Minh,
          Việt Nam. Chúng tôi chuyên về xây dựng thương hiệu, thiết kế và truyền
          thông tiếp thị. Độc lập cả về tư duy và quy mô, chúng tôi tin tưởng
          vào việc hợp tác với khách hàng để đạt được kết quả tuyệt vời. Đội ngũ
          thiết kế đa năng từng đoạt giải thưởng và những người quản lý tận tâm
          của chúng tôi cung cấp các dịch vụ thiết kế thương hiệu riêng để phù
          hợp với bất kỳ dự án và khách hàng nào.
          <br /> <br /> Cho dù bạn là người mới thành lập hay một thương hiệu đã
          thành danh, mang tính biểu tượng, chúng tôi muốn cho bạn thấy sự khác
          biệt của Made Agency: thương hiệu xuất sắc gây tiếng vang và thu hút.
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
