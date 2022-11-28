import React from 'react';
import Link from 'next/link';
import {ChevronRightIcon} from '@heroicons/react/solid';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Breadscrumb = ({pages}) => {
  return (
    <nav className="mb-4 flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div className="flex items-center">
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-500"
            >
              Trang chủ
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-7 w-7 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className={classNames(
                  page.current ? 'text-red-700' : 'text-gray-500',
                  'ml-2 text-xs font-medium text-gray-500 hover:text-red-700 md:ml-4 md:text-sm',
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
  );
};
