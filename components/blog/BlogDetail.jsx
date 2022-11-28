import React from 'react';
import {ChevronRightIcon, ArrowRightIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {Breadscrumb} from '../shared/Breadscrumb';
import BlogPost from '../shared/BlogPost';
const pages = [
  {name: 'Suzu Group', href: '#', current: false},
  {name: 'Tin tức', href: '#', current: false},
  {name: 'UX review presentation', href: '#', current: true},
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
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
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
const post = [
  {
    imageSrc: '/Recruitment/image.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {
        name: 'Article',
        href: '#',
        color: 'bg-red-100 text-red-800',
      },
      {
        name: 'Design',
        href: '#',
        color: 'bg-lime-100 text-lime-800',
      },
      {
        name: 'Marketing',
        href: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
    ],
    href: '#',
    content: '',
  },
];
const specialpost = [
  {
    imageSrc: '/Post/Image2.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {
        name: 'Article',
        href: '#',
        color: 'bg-red-100 text-red-800',
      },
      {
        name: 'Design',
        href: '#',
        color: 'bg-lime-100 text-lime-800',
      },
      {
        name: 'Marketing',
        href: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
    ],

    href: '#',
  },
  {
    imageSrc: '/Post/Image3.png',
    name: 'UX review presentations ',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye ',
    date: '20 Jan 2022',
    categories: [
      {
        name: 'Article',
        href: '#',
        color: 'bg-red-100 text-red-800',
      },
      {
        name: 'Design',
        href: '#',
        color: 'bg-lime-100 text-lime-800',
      },
      {
        name: 'Marketing',
        href: '#',
        color: 'bg-indigo-100 text-indigo-800',
      },
    ],

    href: '#',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const BlogDetail = () => {
  return (
    <div className="container mx-auto pt-16 md:pt-24">
      <div className="container mx-auto ">
        <div className="mx-auto flex flex-col items-center px-4 pb-16 md:pb-24">
          <Breadscrumb pages={pages} />
          {/* Blog Excerpt */}
          <div className="py-10 text-center text-sm font-semibold text-gray-500 md:text-base">
            <span>Published &nbsp;</span>
            <span>{post[0].date}</span>
            <h1 className="font-anton my-4 text-4xl font-normal tracking-tight text-gray-900 md:text-5xl">
              {post[0].name}
            </h1>
            <p className="mb-4 font-normal">{post[0].description}</p>
            {post[0].categories.map((item, index) => (
              <a key={index} href={item.href} className="mr-4 inline-block">
                <span
                  className={classNames(
                    item.color,
                    'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium',
                  )}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          <img src={post[0].imageSrc} className="w-full object-cover"></img>
          <div className="max-w-3xl">
            {/* Content */}
            <article className="prose lg:prose-xl prose-lg prose-indigo mx-auto bg-white py-10 text-xl leading-8 text-gray-500 md:py-16">
              <div>
                <p>
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat.{' '}
                  <strong>Dignissim</strong> sed{' '}
                  <strong>eget risus enim</strong>. Mattis mauris semper sed
                  amet vitae sed turpis id. Id dolor praesent donec est. Odio
                  penatibus risus viverra tellus varius sit neque erat velit.
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim.
                  <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
                  id.
                </p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Quis semper vulputate aliquam venenatis egestas sagittis
                  quisque orci. Donec commodo sit viverra aliquam porttitor
                  ultrices gravida eu. Tincidunt leo, elementum mattis elementum
                  ut nisl, justo, amet, mattis. Nunc purus, diam commodo
                  tincidunt turpis. Amet, duis sed elit interdum dignissim.
                </p>
                <h2>From beginner to expert in 30 days</h2>
                <p>
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                  consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                  euismod vitae interdum mauris enim, consequat vulputate nibh.
                  Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                  Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
                  nullam sed diam turpis ipsum eu a sed convallis diam.
                </p>
                <blockquote>
                  <p>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
                  </p>
                </blockquote>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width="{1310}"
                    height="{873}"
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>
                <h2>Everything you need to get up and running</h2>
                <p>
                  Purus morbi dignissim senectus mattis{' '}
                  <a href="#">adipiscing</a>. Amet, massa quam varius orci
                  dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
                  tristique. Tincidunt sed tempus ut viverra ridiculus non
                  molestie. Gravida quis fringilla amet eget dui tempor
                  dignissim. Facilisis auctor venenatis varius nunc, congue erat
                  ac. Cras fermentum convallis quam.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit.
                </p>
              </div>
            </article>
            <div className="border-t border-t-gray-300 pt-4 md:flex md:pt-6">
              <div className="mr-16 max-w-xs pt-1 pb-4 md:pb-0">
                <p className="text-xs font-normal text-gray-400 md:text-sm ">
                  Nếu bạn thấy bài viết có ích hãy chia sẻ nó đến với mọi người
                  nhé.{' '}
                </p>
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="flex whitespace-nowrap rounded-lg border border-gray-300 py-2 px-3 text-base text-gray-700 hover:text-gray-500"
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
        <div className="grid w-full gap-4 bg-gray-50 px-4 pt-16 md:grid-cols-3 md:pt-24">
          {/* Bài Viết Liên Quan */}
          <div className="w-full space-y-5">
            <p className="text-xl font-semibold text-gray-700 md:text-3xl">
              Bài viết liên quan
            </p>
            <p className=" pb-4 text-2xl font-normal tracking-tight text-gray-700 md:text-3xl">
              Bài viết được mọi người cùng quan tâm
            </p>
            <Link href="#">
              <div className="hidden w-full cursor-pointer justify-center rounded-lg bg-red-500 text-sm font-medium text-white transition duration-500 hover:bg-red-700 md:inline-flex md:w-auto md:text-base">
                <a className="flex items-center px-4 py-2">
                  XEM TOÀN BỘ BÀI VIẾT &nbsp;
                  <ArrowRightIcon className="h-5 w-5 -rotate-45" />
                </a>
              </div>
            </Link>
          </div>
          <div className="w-full ">
            <BlogPost post={specialpost[0]} />
          </div>
          <div className="w-full">
            <BlogPost post={specialpost[1]} />
          </div>
        </div>
        <div className="px-4">
          <Link href="#">
            <div className="btn-red mt-4 md:hidden ">
              <a className="flex items-center">
                XEM TOÀN BỘ BÀI VIẾT &nbsp;
                <ArrowRightIcon className="h-5 w-5 -rotate-45" />
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
