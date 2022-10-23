import React from 'react';
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
import clsx from 'clsx';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const BlogPost = ({post, position}) => {
  return (
    <div className="space-y-8 pb-4 md:pb-8">
      {/* Content */}
      <img
        src={post.imageSrc}
        className="h-56 w-full rounded-lg object-cover"
      ></img>
      <div className="space-y-4">
        <div className="flex text-sm font-semibold text-purple-700">
          <p>{post.author}</p> <p> &nbsp;&bull;&nbsp; </p> <p>{post.date}</p>
        </div>
        <div className="flex justify-between pr-2">
          <p className="text-xl font-semibold text-gray-900 md:text-2xl">
            {post.name}
          </p>{' '}
          <ArrowRightIcon className="h-6 w-6 -rotate-45" />
        </div>
        <p className="text-base font-normal text-gray-500">
          {post.description}
        </p>
        <div className="category flex space-x-2">
          {post.categories.map((item, index) => (
            <a key={index} href={item.href} className="inline-block">
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
      </div>
    </div>
  );
};

export default BlogPost;
