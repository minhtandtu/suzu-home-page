import React from 'react';
import clsx from 'clsx';
import {ChevronRightIcon, ArrowRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {ClockIcon} from '@heroicons/react/outline';
import BlogPost from '../shared/BlogPost';
const pages = [
  {name: 'Tuyển dụng', href: '#', current: true},
  // {name: 'Project Nero', href: '#', current: false},
];

const tabs = [
  {name: 'Tất cả', href: '#', current: true},
  {name: 'Design', href: '#', current: false},
  {name: 'Produc', href: '#', current: false},
  {name: 'Software Engineering', href: '#', current: false},
  {name: 'Customer Success', href: '#', current: false},
];
const comboboxTime = [
  {id: 1, name: 'Mới nhất'},
  {id: 2, name: 'Giàu nhất'},
  {id: 3, name: 'Bự nhất'},
  // More users...
];
const comboboxDepartment = [
  {id: 1, name: 'Tất cả'},
  {id: 2, name: 'Artist'},
  {id: 3, name: 'Video Editor'},
  // More users...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const recruitPost = [
  {
    department: 'Marketing',
    jobTitle: 'Marketing Manager',
    description: 'We are looking for a king',
    detail: 'abc abc abc',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    department: 'Marketing',
    jobTitle: 'Social Media Content',
    description:
      'You will be working in Finjobs Marketing team to: Plan and write content for our social media channels...',
    detail: 'abc abc abc',
    location: ' HCM (remote option available upon request)',
    type: 'Full-time',
  },
  {
    department: 'Technical',
    jobTitle: 'Full-Stake Developer',
    description:
      'You will be working in Finjobs Marketing team to: Plan and write content for our social media channels...',
    detail: 'abc abc abc',
    location: ' HCM ',
    type: 'Full-time',
  },
  {
    department: 'Marketing',
    jobTitle: 'Marketing Executive',
    description:
      'You will be working in Finjobs Marketing team to: Plan and write content for our social media channels...',
    detail: 'abc abc abc',
    location: ' HCM ',
    type: 'Full-time',
  },
  {
    department: 'Marketing',
    jobTitle: 'Marketing Manager',
    description: 'We are looking for a king',
    detail: 'abc abc abc',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    department: 'Marketing',
    jobTitle: 'Social Media Content',
    description:
      'You will be working in Finjobs Marketing team to: Plan and write content for our social media channels...',
    detail: 'abc abc abc',
    location: ' HCM (remote option available upon request)',
    type: 'Full-time',
  },
  {
    department: 'Technical',
    jobTitle: 'Full-Stake Developer',
    description:
      'You will be working in Finjobs Marketing team to: Plan and write content for our social media channels...',
    detail: 'abc abc abc',
    location: ' HCM ',
    type: 'Full-time',
  },
  {
    department: 'Marketing',
    jobTitle: 'Marketing Executive',
    description:
      'You will be working in Finjobs Marketing team to: Plan and write content for our social media channels...',
    detail: 'abc abc abc',
    location: ' HCM ',
    type: 'Full-time',
  },
];
export const JobList = () => {
  return (
    <div className="bg-gray-50 px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl ">
        {/* breadscrums + Tag + Combobox */}
        <div className="container mx-auto px-4">
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-end space-x-2">
              <li>
                <div>
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
                  <div className="flex items-end">
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
          {/*  Label +combobox + List */}
          <div className="grid md:grid-cols-3">
            <div className="">
              {/* BoxText */}
              <div className=" flex flex-col space-y-4 pb-4 md:space-y-8 ">
                <p className="text-xl font-semibold text-gray-700 md:text-3xl">
                  Chúng tôi đang tìm kiếm
                </p>
                <p className="text-2xl font-normal tracking-tight text-gray-900 md:text-4xl">
                  Các vị trí đang tuyển dụng ở{' '}
                  <span className="text-red-500"> SuZu Group</span>
                </p>
              </div>
            </div>

            <div className="md:col-span-2 md:pl-20 lg:pl-32">
              {/* ComboxDepartment & T */}
              <div className="flex justify-between">
                <div className="flex w-[50%] justify-between">
                  <label
                    htmlFor="comboBox"
                    className="px-4 py-2 text-sm font-medium text-gray-700 md:text-base"
                  >
                    {/* Text show above Combobox */}
                    Bộ phận
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="block w-[50%] rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none
                     focus:ring-red-500 sm:text-sm"
                    defaultValue=""
                  >
                    {comboboxDepartment.map((item) => (
                      <option key={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                {/* ComboboxTime */}
                <div className="flex w-[50%] justify-between">
                  <label
                    htmlFor="comboBox"
                    className="px-4 py-2 text-sm font-medium text-gray-700 md:text-base"
                  >
                    {/* Text show above Combobox */}
                    Thời gian
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="block w-[50%] rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    defaultValue=""
                  >
                    {comboboxTime.map((item) => (
                      <option key={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="">
                {recruitPost.map((item, index) => (
                  <div key={index} className="card bg-white py-4">
                    <div className="rounded-lg bg-gray-100 px-4 py-2">
                      <div className="flex justify-between">
                        <p className="text-xs font-semibold text-red-700 md:text-sm">
                          {item.department}
                        </p>{' '}
                        <Link href={'/'}>
                          <a className="hidden text-sm text-red-500 md:inline-flex  ">
                            ỨNG TUYỂN&nbsp;
                            <ArrowRightIcon className="h-6 -rotate-45" />{' '}
                          </a>
                        </Link>
                      </div>
                      <div className="space-4 md:space-y-6">
                        <p className="text-base font-medium text-gray-900 md:text-lg">
                          {item.jobTitle}
                        </p>
                        <p className="text-sm font-normal text-gray-500 md:text-base">
                          {item.description}
                        </p>
                        <div className="flex space-x-2">
                          <div className="text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-5 w-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-500 md:text-base">
                            {item.location}
                          </p>{' '}
                          <ClockIcon className="h-5 text-gray-400" />
                          <p className="text-sm font-medium text-gray-500 md:text-base">
                            {item.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
