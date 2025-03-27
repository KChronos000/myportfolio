import React from 'react'
import { JavaScriptIcon, NextjsIcon, PaletteIcon, PHPIcon, PhythonIcon, ReactIcon, TypeScriptIcon } from '../Svgicon'
const InfoSec = () => {
    return (
        <section className='py-4'>
            <div className="grid lg:p-0 p-2 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-4">
                <div className="p-4 border dark:border-none dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold text-pink-700 mb-4">ข้อมูลส่วนตัว</h2>
                    <Info />
                </div>
                <div className="p-4 border md:col-span-2 lg:col-span-1 dark:border-none dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105 md:order-3">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">ข้อมูลที่เกี่ยวข้อง</h2>
                    <Info2 />
                </div>
                <div className="p-4 border dark:border-none dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold text-violet-700 mb-4">ทักษะ</h2>
                    <Skills />
                </div>
            </div>
        </section>
    )
}

export const Info = () => {
    return (
        <>
            <ul className="space-y-2">
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">ชื่อ - สกุล :</span>
                    <span className="text-gray-700 dark:text-gray-300">นางสาวแทมมารีน ตาปราบ</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">ชื่อเล่น :</span>
                    <span className="text-gray-700 dark:text-gray-200">ไทม์</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">อายุ :</span>
                    <span className="text-gray-700 dark:text-gray-200">18 ปี</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">วันเกิด :</span>
                    <span className="text-gray-700 dark:text-gray-200">23 พฤศจิกายน 2551</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">สัญชาติ :</span>
                    <span className="text-gray-700 dark:text-gray-200">ไทย</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">ศาสนา :</span>
                    <span className="text-gray-700 dark:text-gray-200">พุทธ</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">เบอร์โทรติดต่อ :</span>
                    <span className="text-gray-700 dark:text-gray-200">064-8071895</span>
                </li>
            </ul>
        </>
    )
}
export const Info2 = () => {
    return (
        <>
            <ul className="space-y-2">
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">โรงเรียน :</span>
                    <span className="text-gray-700 dark:text-gray-200">ภูเขียว</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">แผนการเรียน :</span>
                    <span className="text-gray-700 dark:text-gray-200">SMT(scince-math-technology)</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">บิดา :</span>
                    <span className="text-gray-700 dark:text-gray-300">นายสัญญา ตาปราบ</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">มารดา :</span>
                    <span className="text-gray-700 dark:text-gray-200">นางโชฏิกา ตาปราบ</span>
                </li>
                <li className="flex justify-between border-b dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">งานอดเรก :</span>
                    <div className="flex flex-col">
                        <span className="text-gray-700 dark:text-gray-200">• เขียนโค้ด</span>
                        <span className="text-gray-700 dark:text-gray-200">• วาดรูป</span>
                        <span className="text-gray-700 dark:text-gray-200">• สำรวจศึกาษาข้อมูลออนไลน์</span>
                    </div>
                </li>
            </ul>
        </>
    )
}

export const Skills = () => {
    return (
      <>
          <ul className="grid grid-cols-3 gap-4 space-y-2">
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <PhythonIcon />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Python
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <PHPIcon />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      PHP
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <img className='rounded-full' src="chatgpticon.jpg" width={60} />
                  <span className="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Prompt Engineering
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <JavaScriptIcon />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      JavaScript
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <ReactIcon />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      React
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <TypeScriptIcon />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      TypeScript
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <NextjsIcon />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Nextjs.
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <PaletteIcon />
                  <span className="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Drawing or Painting
                  </span>
              </li>
          </ul>
      </>  
    )
  }
  

export default InfoSec