import {ChevronRightIcon} from '@heroicons/react/solid';
import {Link, ListItem} from '@mui/material';
import LinkNext from 'next/link';
import React from 'react';
import Title from '../shared/TitleNoDash';
const post = {
  department: 'SOFTWARE',
  jobTitle: 'Front-end Developer',
  location: 'Tại chỗ',
  type: 'Full-time',
  tag: ['Front-end job', 'ReactJS', 'NodeJS', 'Agile'],
  detail:
    'Strong proficiency in JavaScript, including DOM manipulation' +
    'and the JavaScript object model. Thorough understanding of React.' +
    'js and its core principles.Experience with popular React.js workflows ' +
    ' (such as Flux or Redux).Familiarity with newer specifications of EcmaScript.' +
    'Experience with data structure libraries (e.g., Immutable.js).' +
    'Knowledge of isomorphic React is a plus.Familiarity with RESTful APIs.' +
    'Knowledge of modern authorization mechanisms, such as JSON Web Token.' +
    'Familiarity with modern front-end build pipelines and tools.',
};
const pages = [
  {name: 'Tuyển dụng', href: '#', current: false},
  {name: 'Sofware Developer', href: '#', current: true},
];
const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];
export const HiringDetail = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-16 md:py-24">
        <div className="container mx-auto px-4 ">
          {/* Hero */}
          <div className="pt-16">
            <Title str1={'ỨNG TUYỂN'} str2={post.department} />
            <h1 className="mb-4 text-3xl font-semibold text-gray-900 md:mb-8 md:text-5xl">
              {post.jobTitle}
            </h1>
            <div className="mb-2 flex text-sm font-medium text-gray-500 md:mb-4 md:text-base">
              <img src="/Icon/mapgray.svg" className="mr-2 h-5 w-5"></img>
              <span className="mr-8">{post.location}</span>
              <img src="/Icon/clockgray.svg" className="mr-2 h-5 w-5"></img>
              <span>{post.type}</span>
            </div>
            <div className="flex flex-wrap text-sm font-medium text-gray-700 md:text-base ">
              {post.tag.map((item, index) => (
                <div
                  key={index}
                  className="mr-2 mb-2 rounded-full bg-gray-100 md:mr-4"
                >
                  <p className="whitespace-nowrap px-3">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl  ">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-end space-x-2">
                <li>
                  <div className="flex items-center">
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
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
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
            {/* Post Content + Button*/}
            <div className="grid md:grid-cols-10">
              <article className="prose lg:prose-xl prose-lg prose-indigo mx-auto pb-8 text-xl leading-8 text-gray-500 md:col-span-6">
                <div>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat.{' '}
                    <strong>Dignissim</strong> sed{' '}
                    <strong>eget risus enim</strong>. Mattis mauris semper sed
                    amet vitae sed turpis id. Id dolor praesent donec est. Odio
                    penatibus risus viverra tellus varius sit neque erat velit.
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim.
                    <a href="#">Mattis mauris semper</a> sed amet vitae sed
                    turpis id.
                  </p>
                  <ul role="list">
                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                    <li>
                      Cras cras lobortis vitae vivamus ultricies facilisis
                      tempus.
                    </li>
                    <li>
                      Orci in sit morbi dignissim metus diam arcu pretium.
                    </li>
                  </ul>
                  <p>
                    Quis semper vulputate aliquam venenatis egestas sagittis
                    quisque orci. Donec commodo sit viverra aliquam porttitor
                    ultrices gravida eu. Tincidunt leo, elementum mattis
                    elementum ut nisl, justo, amet, mattis. Nunc purus, diam
                    commodo tincidunt turpis. Amet, duis sed elit interdum
                    dignissim.
                  </p>
                  <h2>From beginner to expert in 30 days</h2>
                  <p>
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                    consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                    euismod vitae interdum mauris enim, consequat vulputate
                    nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                    mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam
                    sed nullam sed diam turpis ipsum eu a sed convallis diam.
                  </p>
                  <blockquote>
                    <p>
                      Sagittis scelerisque nulla cursus in enim consectetur
                      quam. Dictum urna sed consectetur neque tristique
                      pellentesque. Blandit amet, sed aenean erat arcu morbi.
                    </p>
                  </blockquote>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit.
                  </p>

                  <h2>Everything you need to get up and running</h2>
                  <p>
                    Purus morbi dignissim senectus mattis{' '}
                    <a href="#">adipiscing</a>. Amet, massa quam varius orci
                    dapibus volutpat cras. In amet eu ridiculus leo sodales
                    cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                    non molestie. Gravida quis fringilla amet eget dui tempor
                    dignissim. Facilisis auctor venenatis varius nunc, congue
                    erat ac. Cras fermentum convallis quam.
                  </p>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit.
                  </p>
                </div>
              </article>
              <div className="md:col-span-4">
                <div className="rounded-lg bg-white p-3 shadow-lg md:p-6">
                  <LinkNext href="https://www.youtube.com">
                    <div className="btn-red">
                      <a className="">ỨNG TUYỂN NGAY</a>
                    </div>
                  </LinkNext>
                  <div className="mt-6 border-t border-t-gray-300">
                    <div className="py-4">
                      <p className="text-xs font-normal text-gray-400 md:text-sm ">
                        Hãy chia sẻ công việc này đến những người phù hợp nhé!
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="flex min-w-max whitespace-nowrap rounded-lg border border-gray-300 py-2 px-3 text-base text-gray-700 hover:text-gray-500"
                      >
                        <img
                          src="/Icon/copy.svg"
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />{' '}
                        Sao chép liên kết
                      </a>
                      {social.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="rounded-lg border border-gray-300 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <item.icon className="h-7 w-7" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
