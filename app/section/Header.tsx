"use client"
import React from 'react';

const Header = () => {
  return (
    <div className="relative w-full min-h-[40vh]">
      <div className="flex flex-row snap-x snap-mandatory overflow-x-auto scrollbar-none scroll-smooth min-h-[60vh]">
        <div className="flex justify-between items-center w-screen h-[60hv] p-10 bg-gray-500 area">
          <ul className="circles z-[0]">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <PersonalInfo />
          <PicInfo />
        </div>
      </div>
    </div>
  );
};

export const PersonalInfo = () => {
  return (
    <section className="relative z-10 md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-l-lg shadow-lg max-w-4xl mx-auto h-full">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">นางสาวแทมมารีน ตาปราบ</h2>
          <p className="text-gray-600 dark:text-gray-300">นักพัฒนาเว็บไซต์  | นักออกแบบ UX/UI</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">อายุ: 18 ปี | ม.6</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">ชื่อเล่น: ไทม์</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">สัญชาติ: ไทย</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">ศาสนา: พุทธ</p>

          <div className="">
            <a href="/personalinfo" className="">
              <button className='px-4 py-2 text-white bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-lg hover:transition-all hover:duration-300 hover:scale-105'>ดูทั้งหมด</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PicInfo = () => {
  return (
    <section className="relative z-10 md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-r-lg shadow-lg max-w-4xl mx-auto h-full">
      <div className="flex items-center justify-center">
        <div
          className="bg-cover md:w-2/3 md:pl-6"
          style={{ backgroundImage: `url(public/test.jpg)` }}
        >
          {/* รูปภาพถูกใช้เป็นพื้นหลัง */}
        </div>
      </div>
    </section>
  );
};

export default Header;
