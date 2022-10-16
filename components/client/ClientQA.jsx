import React from 'react';
import {Disclosure} from '@headlessui/react';
import {
  ChevronDownIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline';
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ClientQA = () => {
  return (
    <div className="bg-white px-4 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="md:flex md:space-x-8">
          {/* BoxText */}
          <div className="w-full md:max-w-md">
            <div className="flex h-full flex-col ">
              <div className="space-y-4 pb-4 md:space-y-8 ">
                <p className="text-xl font-semibold text-gray-700 md:text-3xl">
                  Hỗ Trợ
                </p>
                <p className="text-2xl font-normal tracking-tight text-gray-900 md:text-4xl">
                  Các câu hỏi thường gặp
                </p>
                <p className="max-w-3xl text-base text-gray-500 md:text-xl">
                  Mọi thứ bạn cần biết về quá trình và sản phẩm khi hợp tác cùng
                  chúng tôi.
                </p>
              </div>
            </div>
          </div>
          {/* BoxImages */}
          <div className="md:flex-1   ">
            <div className="flex h-full max-w-3xl flex-col ">
              <dl className="space-y-6">
                {faqs.map((faq) => (
                  <Disclosure
                    as="div"
                    key={faq.question}
                    className="rounded-lg p-4 first:bg-gray-200 md:p-8"
                  >
                    {({open}) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                            <span className="text-base font-medium text-gray-900 md:text-lg">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusCircleIcon className="h-6 w-6" />
                              ) : (
                                <PlusCircleIcon className="h-6 w-6" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-sm text-gray-500 md:text-base">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientQA;
