import React from 'react';

const ProjectItem = ({project}) => {
  return (
    <>
      <div className="relative ">
        <div className="group  relative overflow-hidden   rounded-lg ">
          <img
            src={project.imageSrc}
            className=" h-auto object-cover group-hover:scale-125 group-hover:transition group-hover:duration-500  "
            alt={project.imageSrc.toString()}
          ></img>
          <div
            className="absolute bottom-0 left-0 right-0  h-[50%] bg-gradient-to-b from-transparent to-black 
                   opacity-70 "
          ></div>

          <div className="absolute bottom-0 left-0 right-0 flex w-full justify-between pl-4 pb-4   ">
            {/* Text */}
            <div className=" text-left text-white ">
              <p className=" text-xs font-semibold lg:text-base ">
                {project.branch}
              </p>
              <p className=" text-sm font-semibold lg:text-3xl">
                {project.name}
              </p>
              <p className="text-xs font-normal lg:text-base">
                {project.description}
              </p>
            </div>
            {/* Arrow */}
            <div className="mr-2 hidden flex-col justify-end md:flex">
              <button
                type="button"
                className=" h-12 w-12 items-center rounded-md bg-transparent px-2 py-2 font-medium group-hover:bg-red-500  group-hover:text-white   
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
      </div>
    </>
  );
};

export default ProjectItem;
