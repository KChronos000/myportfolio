"use client"
import React, { useRef } from 'react';

const Header = () => {

  return (
    <div className="relative w-full min-h-[40vh]">
      <div
        className="flex flex-row snap-x snap-mandatory overflow-x-auto scrollbar-none scroll-smooth min-h-[60vh]"
      >
        <div className="flex justify-between items-center w-screen h-[60hv] p-10 bg-gray-500">

          <PersonalInfo />
          <PersonalInfo />

        </div>
      </div>

    </div>
  );
};

export const PersonalInfo = () => {
  return (
    <section className="w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Personal Info */}
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">นางสาวแทมมารีน ตาปราบ</h2>
          <p className="text-gray-600 dark:text-gray-300">นักพัฒนาเว็บไซต์  | นักออกแบบ UX/UI</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">อายุ: 18 ปี | สถานที่: กรุงเทพฯ</p>

          <div className="">
            <a href="" className="">
              <button className='px-4 py-2 text-white bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-lg hover:transition-all hover:duration-300 hover:scale-105'>ดูทั้งหมด</button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};


export default Header;
