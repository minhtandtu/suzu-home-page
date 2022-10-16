import Link from 'next/link';
import React from 'react';
import Title from '../shared/Title';
import BlogPost from '../shared/BlogPost';

const posts = [
  {
    imageSrc: '/Post/Image1.png',
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
const Blog = () => {
  return (
    <>
      {/* Blog section */}
      <div className="mx-auto  py-8 px-4 sm:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Title str1={'TIN TỨC'} str2="NỔI BẬT" />
          </div>
          <div className="mx-auto grid gap-4 lg:grid-cols-3">
            {posts.map(
              (item) => (
                <BlogPost key={item.name} post={item} />
              ),
              //  blogpost(item)
            )}
          </div>
          {/* Button */}
          <div className="md:flex md:justify-center">
            <Link href={'/'}>
              <div className="group mt-7 cursor-pointer rounded-lg border border-red-500 bg-white px-4 py-2 text-center text-red-500 transition duration-500 hover:bg-red-200 md:mt-10">
                <p className="text-base font-medium group-hover:text-red-900">
                  XEM THÊM BÀI VIẾT &rarr;
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
