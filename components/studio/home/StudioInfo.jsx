import React from 'react';
import {
  ChevronRightIcon,
  HomeIcon,
  ArrowRightIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import {Breadscrumb} from '../../shared/Breadscrumb';
const pages = [
  {name: 'Đội ngũ', href: '#', current: false},
  {name: 'Suzu Studio', href: '#', current: true},
];
const StudioInfo = () => {
  return (
    <div
      className="mx-auto max-w-3xl 
    py-16 px-4 md:py-24"
    >
      <div className="space-y-5 md:space-y-8">
        <Breadscrumb pages={pages} />
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
