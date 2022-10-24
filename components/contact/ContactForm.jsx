import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/solid';
import TitleNoDash from '../shared/TitleNoDash';

const pages = [
  {name: 'Liên hệ', href: '#', current: true},
  // {name: 'Project Nero', href: '#', current: false},
];
export const ContactForm = () => {
  return (
    <div className="container relative mx-auto max-w-7xl py-16 md:py-24 md:pl-4 md:pr-0">
      <div className="container mx-auto flex">
        <div className="w-full px-4 md:max-w-sm lg:max-w-lg">
          <div className="mb-0 md:mb-14">
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol role="list" className="flex space-x-2">
                <li>
                  <div>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-500"
                    >
                      Trang chủ
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
          <TitleNoDash str1={'LIÊN HỆ'} str2="VỚI CHÚNG TÔI" />
          <p className="mb-9 text-sm font-normal text-gray-500 md:mb-14 md:text-xl">
            Đội ngũ chúng tôi rất muốn nghe những ý kiến từ bạn.
          </p>

          {/* FORM */}
          <div className="relative mx-auto ">
            <svg
              className="absolute left-full translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 -translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>

            <div className="mt-12">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8"
              >
                {/* Họ */}
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Họ
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm placeholder:text-base placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                      placeholder="Họ"
                    />
                  </div>
                </div>
                {/* Tên */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tên
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm placeholder:text-base placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                      placeholder="Tên"
                    />
                  </div>
                </div>
                {/* ------ */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm placeholder:text-base placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Số điện thoại
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option>VN</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 placeholder:text-base placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                      placeholder="+ (84) 987-6543"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nội dung
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm placeholder:text-base placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                      defaultValue={''}
                      placeholder="Hãy cho chúng tôi biết về dự án của bạn ở đây..."
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    GỬI TIN NHẮN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 hidden h-[100%] w-1/2 bg-red-300 md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32280.32575775209!2d106.70579336848338!3d10.721292990410365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9150d0c619%3A0x694f1d872f7ec64c!2sSkyGarden%201%2C%20Apartment%20Complex%20%26%20International%20Community!5e0!3m2!1sen!2s!4v1666512345359!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowfullscreen="true;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
