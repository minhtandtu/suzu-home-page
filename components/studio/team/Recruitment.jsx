import React from 'react';
import Link from 'next/link';
import {ChevronRightIcon, ArrowRightIcon} from '@heroicons/react/solid';
import {ClockIcon} from '@heroicons/react/outline';
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
    department: 'Content',
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
    department: 'Back Office',
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
    department: 'IT',
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
const job = [
  {
    node: {
      jobField: {
        jobs: [
          {
            jobTitle: 'Sale Executive',
            jobType: 'Full-time',
            slug: 'sale-executive',
            detail: 'Operation hours: \n7am-5pm weekdays\n9-5 weekends',
            jobDescription:
              'Look for clients and look for more clients and more clients',
            jobLocation: 'HCM',
          },
          {
            jobTitle: 'Sale Leader',
            jobType: 'Full-time',
            slug: 'sale-leader',
            detail: 'Help members to have more sales and meet KPI ',
            jobDescription: 'Lead Sale Executives ',
            jobLocation: 'HCM',
          },
        ],
        fieldTitle: 'Sale ',
        fieldDesctiption: 'Look for booking and close sale successfully',
      },
    },
  },
  {
    node: {
      jobField: {
        jobs: [
          {
            jobTitle: 'Sale Executive',
            jobType: 'Full-time',
            slug: 'sale-executive',
            detail: 'Operation hours: \n7am-5pm weekdays\n9-5 weekends',
            jobDescription:
              'Look for clients and look for more clients and more clients',
            jobLocation: 'HCM',
          },
          {
            jobTitle: 'Sale Leader',
            jobType: 'Full-time',
            slug: 'sale-leader',
            detail: 'Help members to have more sales and meet KPI ',
            jobDescription: 'Lead Sale Executives ',
            jobLocation: 'HCM',
          },
        ],
        fieldTitle: 'Sale ',
        fieldDesctiption: 'Look for booking and close sale successfully',
      },
    },
  },
  {
    node: {
      jobField: {
        jobs: [
          {
            jobTitle: 'Website Developer',
            jobType: 'Full-time',
            slug: 'webdev',
            detail: '8hours/day',
            jobDescription: 'Develop websites for the company and its clients',
            jobLocation: 'Remote',
          },
        ],
        fieldTitle: 'Software Development',
        fieldDesctiption: 'Create something from nothing',
      },
    },
  },
  {
    node: {
      jobField: {
        jobs: [
          {
            jobTitle: 'Sai Vat',
            jobType: 'Fulltime',
            slug: 'culi',
            detail: 'Ai keu gi lam nay',
            jobDescription: "Bao gi lam nay'",
            jobLocation: 'HCM',
          },
        ],
        fieldTitle: 'IT',
        fieldDesctiption: 'Fixing up things in the office',
      },
    },
  },
];
export const Recruitment = () => {
  return (
    <div className="pt-16 md:pt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="">
            {/* BoxText */}
            <p className="mb-4 text-xl font-semibold text-gray-700 md:text-3xl">
              Chúng tôi đang tìm kiếm
            </p>
            <p className="mb-8 text-2xl font-normal tracking-tight text-gray-900 md:text-4xl">
              Các vị trí đang tuyển dụng ở
              <span className="text-red-500"> SuZu Studio</span>
            </p>
            {/*  */}
            {recruitPost.map((item, index) => (
              <div className="grid md:grid-cols-3" key={index}>
                <div className=""></div>
                <div className="bg-white py-4 md:col-span-2">
                  <div className="rounded-lg bg-gray-100 p-4 md:p-8">
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
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto pt-16 md:pt-24 2xl:container">
        <img
          src="/Studio/Image8.png"
          className="h-full w-full object-cover"
        ></img>
      </div>
    </div>
  );
};
