import React from 'react';
const logo = [
  {name: 'loctroi', imgUrl: '/Logo/logoLocTroi.png'},
  {name: 'metup', imgUrl: '/Logo/logoMeHup.png'},
  {name: 'tsp', imgUrl: '/Logo/logoTSP.png'},
  {name: 'thelist', imgUrl: '/Logo/logoTheList.png'},
  {name: 'z', imgUrl: '/Logo/logoZ.png'},
  {name: 'box', imgUrl: '/Logo/logoBoxStudio.png'},
  {name: 'brain', imgUrl: '/Logo/logoBrainad.png'},
  {name: 'brain', imgUrl: '/Logo/logoLava.png'},
];
const Customers = () => {
  return (
    <>
      <div className="mx-auto w-full bg-gray-50">
        <div className="container mx-auto  px-4 py-8 sm:py-12">
          {/* partners logo */}
          <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow sm:p-10">
            <div className=" text-center">
              <h4 className=" mb-4 text-xs font-normal text-slate-500 sm:text-base ">
                Chúng tôi đã giúp 20+ doanh nghiệp giải quyết các vấn đề họ đang
                gặp phải
              </h4>
              <div className="flow-root ">
                <div className="grid grid-cols-3 gap-0.5 md:grid-cols-4  lg:grid-cols-8   ">
                  {logo.map((item, index) => (
                    <div
                      key={index}
                      className="col-span-1 flex justify-center py-4 px-1 "
                    >
                      <img
                        className="h-10  object-cover"
                        src={item.imgUrl}
                        alt="customerlogo"
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

export default Customers;
