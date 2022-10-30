import React from 'react';
import {
  ChevronRightIcon,
  HomeIcon,
  ArrowRightIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
const pages = [
  {name: 'Đội ngũ', href: '#', current: false},
  {name: 'Suzu Studio', href: '#', current: true},
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const StudioInfo = () => {
  return (
    <div
      className="mx-auto max-w-3xl 
    py-16 px-4 md:py-24"
    >
      <div className="space-y-5 md:space-y-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <a href="#" className="text-gray-400 hover:text-red-700">
                  Trang chủ
                  {/* <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  /> */}
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href={page.href}
                    className={classNames(
                      page.current ? 'text-red-700' : 'text-gray-500',
                      'ml-4 text-sm font-medium text-gray-500 hover:text-red-700',
                    )}
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-xl font-semibold tracking-tight text-gray-700 md:text-4xl">
          SuZu Studio là studio mỹ thuật, chuyên về truyện tranh và hoạt hình.
        </h1>
        <p className="text-sm font-normal text-gray-700 md:text-xl">
          Nội dung, ý tưởng câu chuyện luôn là trọng tâm của mọi sản phẩm mà
          team thực hiện, từ những sản phẩm comic cộng đồng, truyện tranh dài
          kỳ, phim hoạt hình, cho đến những sản phẩm quảng cáo.
        </p>
        <div>
          <Link href="/portfolio">
            <div className="btn-gray w-full whitespace-nowrap  md:w-auto">
              <p className="mx-auto font-medium">
                DỰ ÁN CỦA CHÚNG TÔI
                <ArrowRightIcon className="h-6 -rotate-45 pl-2 " />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudioInfo;
