import React from 'react';

const TeamImgGrid = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="order-2 col-span-5 flex">
          <div className="col-span-3  mr-3 rounded-md">
            <img src="/Branch/branch1.png" alt="branchImage" />
          </div>
          <div className="col-span-2  rounded-md">
            <img src="/Branch/branch2.png" alt="branchImage" />
          </div>
        </div>
        <div className="order-1 col-span-5 flex">
          <div className="col-span-2  mr-3 overflow-hidden rounded-md">
            <img src="/Branch/branch3.png" alt="branchImage" />
          </div>
          <div className="col-span-3 overflow-hidden rounded-md">
            <img src="/Branch/branch4.png" alt="branchImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamImgGrid;
