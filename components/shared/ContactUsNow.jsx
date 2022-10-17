import React from 'react';
import Link from 'next/link';
const logo = [
  {name: 'metup', imgUrl: '/Logo/logoMeHup.png', id: 1},
  {name: 'Yeah1', imgUrl: '/Logo/logoYeah1.png', id: 2},
  {name: 'LocTroi', imgUrl: '/Logo/logoLocTroi.png', id: 3},
  {name: 'pp', imgUrl: '/Logo/logoPP.png', id: 4},
  {name: 'Casting', imgUrl: '/Logo/Castinglogo.png', id: 5},
  {name: 'BCM', imgUrl: '/Logo/BCMlogo.png', id: 6},
  {name: 'Icon ', imgUrl: '/Logo/IconMedialogo.png', id: 7},
  {name: 'Chin', imgUrl: '/Logo/Chinlogo.png', id: 8},
  {name: 'EON', imgUrl: '/Logo/Eonlogo.png', id: 9},
];
const ContactUsNow = () => {
  return (
    <>
      <div className="mx-auto bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="container mx-auto px-4">
            <div className="md:rounded-lg md:bg-white md:p-12 md:shadow-xl ">
              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                {/* Text + Button */}
                <div className="mb-8 rounded-lg bg-white p-4 shadow-lg md:col-span-1 md:shadow-none">
                  <div className="md:max-w-md">
                    <p className="text-left text-xl font-semibold tracking-tight text-gray-900  sm:text-3xl md:leading-10">
                      Tham gia cùng hơn{' '}
                      <span className="text-red-500"> 20+ </span> công ty khởi
                      nghiệp đang phát triển với{' '}
                      <span className="text-red-500">SuZu Group</span>
                    </p>
                    <p className="mt-3 max-w-3xl text-left  text-base text-gray-500 md:text-xl">
                      Hãy cho chúng tôi biết về dự án của bạn nhé.
                    </p>
                  </div>
                  {/* Ứng tuyển ngay --> */}
                  <div className="w-full pt-4">
                    <Link href="/">
                      <div className="btn-red">
                        <p>LIÊN HỆ NGAY </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* LOGO */}
                <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                  {logo.map((cai, index) => (
                    <div
                      key={index}
                      className="col-span-1 flex justify-center py-4 px-4 "
                    >
                      <img
                        className="max-h-12 object-scale-down"
                        src={cai.imgUrl}
                        alt="logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsNow;
