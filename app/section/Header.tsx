"use client"
import React, { useRef } from 'react';

const Header = () => {

  return (
    <div className="relative w-full min-h-[40vh]">
      <div
        className="flex flex-row snap-x snap-mandatory overflow-x-auto scrollbar-none scroll-smooth min-h-[60vh]"
      >
        <div className="flex justify-between items-center w-screen h-[60hv] p-10 bg-gray-500">
          <div className="w-1/2">
            <span>heading</span>

            <div className="">
              <a href="" className="">
                <button className='px-4 py-2 text-white bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-lg hover:transition-all hover:duration-300 hover:scale-105'>ดูทั้งหมด</button>
              </a>
            </div>

            <p></p>
          </div>
          {/* <div className="w-1/2 bg-blue-200">dsa</div> */}
        </div>
      </div>

    </div>
  );
};

export default Header;
