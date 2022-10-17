import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
const pages = [{name: 'Khách hàng', href: '#', current: true}];
const ClientInfo = () => {
  return (
    <div className="bg-gray-50 py-16 md:space-y-8 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className=" mb-4 md:mb-8">
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <li>
                  <Link href="/">
                    <a className="text-sm font-medium text-gray-500 hover:text-gray-500">
                      Trang chủ
                      <span className="sr-only">Home</span>
                    </a>
                  </Link>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className="flex items-end">
                      <ChevronRightIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href={page.href}
                        className="ml-2 text-sm font-medium text-red-700 hover:text-gray-900"
                        aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <p className=" mb-4 text-xl font-semibold text-gray-700 md:mb-6 md:text-3xl">
            Sự kết nối
          </p>
          <div className="mb-6 text-sm font-normal text-gray-900 md:mb-8 md:max-w-3xl md:text-xl">
            <p>
              SChúng tôi luôn cởi mở với các mối quan hệ đối tác mới và danh mục
              đầu tư của chúng tôi tự nói lên điều đó, nhưng rất nhiều dự án
              trong quá khứ và hiện tại của chúng tôi sẽ không thể được tạo ra
              nếu không có những khách hàng danh sách đáng kinh ngạc của chúng
              tôi. Mọi thiết kế tuyệt vời đều bắt đầu bằng một câu chuyện thậm
              chí còn hay hơn, nhưng nếu không có khách hàng, sẽ không có câu
              chuyện nào để kể.
              <br />
              <br /> Studio của chúng tôi luôn phát triển mạnh nhờ sự hợp tác
              cởi mở và tìm tòi sáng tạo và chúng tôi may mắn có được một số cơ
              hội làm việc với danh sách khách hàng tuyệt vời luôn sẵn sàng thúc
              đẩy con thuyền.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto 2xl:container ">
        <img
          src="/Client/ClientInfo.png"
          className=" relative mx-auto  w-full object-cover "
        ></img>
      </div>
    </div>
  );
};

export default ClientInfo;
