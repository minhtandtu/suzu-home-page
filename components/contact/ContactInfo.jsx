import React from 'react';
const boxinfo = [
  {
    icon: '/Icon/featured.svg',
    title: 'Trò chuyện với chúng tôi',
    description: 'Chúng tôi ở đây để giúp đỡ',
    info: 'contact@avecorp.com',
  },
  {
    icon: '/Icon/mapred.svg',
    title: 'Địa chỉ của chúng tôi',
    description: 'Bạn có thể thăm văn phòng của chúng tôi.',
    info: '265/40 Nơ Trang Long, Phường 11, Quận Bình Thạnh, Ho Chi Minh City, Vietnam',
  },
  {
    icon: '/Icon/phonered.svg',
    title: 'Liên lạc để hỗ trợ',
    description: 'Thứ 2 - Thứ 6 (8:00 - 18:00)',
    info: '+84 901 756 557',
  },
];
export const ContactInfo = () => {
  return (
    <div className="bg-gray-50 pt-16 md:pt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-xl font-semibold text-gray-700  md:text-4xl">
            Chúng tôi rất muốn nghe ý kiến của bạn
          </p>
          <p className="mb-6 text-sm font-normal text-gray-500 md:mb-8  md:text-xl">
            Đội ngũ thân thiện của chúng tôi luôn ở đây để lắng nghe.
          </p>
          <div className="justify-between space-y-4 space-x-0 md:flex md:space-y-0 md:space-x-4">
            {boxinfo.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col rounded-lg bg-white p-4 shadow-lg"
              >
                <img src={item.icon} className="mb-8 h-12 w-12 " />
                <div className="flex flex-1 flex-col">
                  <p className="flex-1 pb-2 text-base font-semibold text-gray-900 md:text-lg">
                    {item.title}
                  </p>
                  <p className="mb-4 text-sm font-normal text-gray-500 md:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto h-8 md:h-24 lg:h-20">
                  <p className="flex-shrink-0 text-sm font-medium text-red-500 md:text-base">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
