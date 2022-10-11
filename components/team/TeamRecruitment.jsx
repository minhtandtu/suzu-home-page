import React from 'react';
import Link from 'next/link';

const TeamRecruitment = () => {
  return (
    <div className="bg-white px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="md:flex md:space-x-8">
          {/* BoxText */}
          <div className="md:w-1/2">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="space-y-4 pb-4 md:space-y-8 ">
                <p className="text-xl font-semibold text-gray-700 md:text-3xl">
                  Tuyển dụng
                </p>
                <p className="text-2xl font-normal tracking-tight text-gray-900 md:text-4xl">
                  Chúng tôi đang tìm kiếm
                </p>
                <p className="max-w-3xl text-base text-gray-500 md:text-xl">
                  Hãy tham gia vào đội ngũ của chúng tôi với những con người đa
                  dạng, đam mê và một môi trường nuôi dưỡng một nền văn hóa giúp
                  bạn có thể làm việc và phát triển bản thân tốt nhất.
                </p>
                {/* Ứng tuyển ngay --> */}
                <div className="w-full ">
                  <Link href="/">
                    <div className="btn-red">
                      <p>ỨNG TUYỂN NGAY </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* BoxImages */}
          <div className="md:w-1/2 ">
            <div className="flex h-full max-w-3xl flex-col items-center justify-center">
              <div className="relative flex h-[50%] w-[70%] items-end justify-center ">
                <div>
                  <img src="/Team/recruit2.png" className="imgteam" />
                </div>
                <div>
                  <img src="/Team/recruit1.png" className="imgteam" />
                </div>
              </div>
              <div className="flex h-[50%] w-full items-start justify-center ">
                <div>
                  <img src="/Team/recruit3.png" className="imgteam" />
                </div>
                <div>
                  <img src="/Team/recruit4.png" className="imgteam" />
                </div>
                <div>
                  <img src="/Team/recruit5.png" className="imgteam" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRecruitment;
