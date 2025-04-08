import React from 'react'
import { CssIcon, HtmlIcon, JavaScriptIcon, NextjsIcon, PaletteIcon, PHPIcon, PhythonIcon, ReactIcon, TypeScriptIcon } from '../Svgicon'
import { infoList , info2List } from './InfoData';

const InfoSec = () => {
    return (
        <section className='py-4'>
            <div className="grid lg:p-0 p-2 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-4">
                <div className="p-4 border dark:border-none border-red-200 shadow-pink-300 dark:shadow-fuchsia-700/80 bg-red-50 dark:bg-zinc-800 rounded-lg shadow-md w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold text-pink-700 dark:text-pink-500 mb-4">ข้อมูลส่วนตัว</h2>
                    <Info />
                </div>
                <div className="p-4 border dark:border-none border-indigo-200 shadow-blue-300 dark:shadow-blue-700/80 md:col-span-2 lg:col-span-1 bg-indigo-50 dark:bg-zinc-800 rounded-lg shadow-md w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105 md:order-3">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-500 mb-4">ข้อมูลที่เกี่ยวข้อง</h2>
                    <Info2 />
                </div>
                <div className="p-4 border dark:border-none border-purple-200 shadow-violet-300 dark:shadow-violet-700/80 bg-purple-50 dark:bg-zinc-800 rounded-lg shadow-md w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold text-violet-700 dark:text-violet-500 mb-4">ทักษะ</h2>
                    <Skills />
                </div>
            </div>
        </section>
    )
}


export const Info = () => {
    return (
        <ul className="space-y-2">
            {infoList.map((item, index) => (
                <li key={index} className="flex justify-between border-b border-red-200 dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">{item.label}</span>
                    <span className="text-gray-700 dark:text-gray-200">{item.value}</span>
                </li>
            ))}
        </ul>
    );
};


export const Info2 = () => {
    return (
        <ul className="space-y-2">
            {info2List.map((item, index) => (
                <li key={index} className="flex justify-between border-b border-indigo-200 dark:border-zinc-700">
                    <span className="font-medium text-gray-800 dark:text-gray-300">{item.label}</span>
                    {Array.isArray(item.value) ? (
                        <div className="flex flex-col">
                            {item.value.map((v, i) => (
                                <span key={i} className="text-gray-700 dark:text-gray-200">• {v}</span>
                            ))}
                        </div>
                    ) : (
                        <span className="text-gray-700 dark:text-gray-200">{item.value}</span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export const Skills = () => {
    return (
      <>
          <ul className="grid grid-cols-5 gap-4 space-y-2">
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
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <HtmlIcon />
                  <span className="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      HTML5
                  </span>
              </li>
              <li className="relative flex justify-center items-center hover:transition-all hover:duration-300 hover:scale-105">
                  <CssIcon />
                  <span className="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black p-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                      CSS3
                  </span>
              </li>
          </ul>
      </>  
    )
  }
  

export default InfoSec