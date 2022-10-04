import React from 'react';
import Title from './Title';
import Link from 'next/link';
import TeamImgGrid from './TeamImgGrid';
const branchName = [
  {
    name: 'SuZu Studio',
    href: '#',
    current: false,
    des: ' Short Description',
  },

  {
    name: 'Social Social',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'SuZu Music',
    href: '#',
    current: false,
    des: ' Short Description',
  },
  {
    name: 'NAE Software',
    href: '#',
    current: false,
    des: ' Short Description',
  },
];
const linhvuc = [
  {
    name: 'Desk and Office',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description:
      'Journals and note-taking Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description:
      'Daily commute essentials Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt:
      'Brown leather key ring with brass metal loops and rivets on wood table.',
    description:
      'Keep your phone, keys, and wallet together, so you can lose everything at once. and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt:
      'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description:
      'The rest of the house will still be a mess, but your desk will look great.  and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt:
      'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description:
      'Be more productive than enterprise project managers with a single piece of paper.  and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
];
const TeamBranch = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl  ">
          <Title str1={'ĐỘI NGŨ'} str2={'CỦA CHÚNG TÔI'} />
          {/* TEAM BRANCH CONTENT */}
          <div className="grid gap-4 md:grid-cols-10">
            {/* Team List and Images */}
            {/* List SECTION & Button*/}
            <div className="col-span-1 flex flex-col items-center justify-between space-y-2 md:col-span-4 xl:space-y-6">
              {/* List Items */}
              <div className="flex h-full w-full flex-col justify-between space-y-2 ">
                {/* List item */}
                {branchName.map((item) => (
                  <Link href={'/'} key={item.name}>
                    <div
                      key={item.name}
                      className="group box-border  flex w-full cursor-pointer items-center  justify-between rounded-lg border border-gray-100 bg-gray-50 transition duration-500  hover:bg-white hover:shadow-lg"
                    >
                      {/* Texts */}
                      <div className="p-4 ">
                        <p className="mb-2 text-2xl font-semibold text-gray-700  group-hover:text-red-500 md:text-3xl">
                          {item.name}
                        </p>
                        <p className="text-xs font-normal text-gray-700 md:text-2xl">
                          {item.des}
                        </p>
                      </div>
                      {/* Arrow Button */}
                      <div>
                        {/* Arrow */}
                        <div className="mr-2 ">
                          <button
                            type="button"
                            className="h-12 w-12 items-center rounded-md bg-transparent px-2 py-2 font-medium transition duration-500 group-hover:bg-red-500  group-hover:text-white   
                  "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="white"
                              className="hidden h-6 w-6 -rotate-45 group-hover:block"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="w-full">
                <Link href="#">
                  <div className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-1 transition duration-500 hover:bg-gray-300">
                    <a className="py-4 text-sm font-medium lg:text-lg">
                      KHÁM PHÁ ĐỘI NGŨ CỦA CHÚNG TÔI &rarr;
                    </a>
                  </div>
                </Link>
              </div>
            </div>
            {/* Image SECTION---> */}
            <div className=" col-span-1 md:col-span-6">
              <TeamImgGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBranch;
