import React from 'react'
import { JavaScriptIcon, PHPIcon, PhythonIcon, ReactIcon, TypeScriptIcon } from '../Svgicon'

const InfoSec = () => {
    return (
        <section className='py-4'>
            <div className="grid md:p-0 p-2 md:grid-cols-2 justify-center items-center gap-4">
                <div className="p-4 border dark:border-none dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">ข้อมูลส่วนตัว</h2>
                    <Info />
                </div>
                <div className="p-4 border dark:border-none dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-md mx-auto h-full hover:transition-all hover:duration-300 hover:scale-105">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">ทักษะ</h2>
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
                <li className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-300">ชื่อ - สกุล :</span>
                    <span className="text-gray-700 dark:text-gray-300">นางสาวแทมมารีน ตาปราบ</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-300">ชื่อเล่น :</span>
                    <span className="text-gray-700 dark:text-gray-200">ไทม์</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-300">อายุ :</span>
                    <span className="text-gray-700 dark:text-gray-200">18 ปี</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-300">วันเกิด :</span>
                    <span className="text-gray-700 dark:text-gray-200">23 พฤศจิกายน 2551</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-300">สัญชาติ :</span>
                    <span className="text-gray-700 dark:text-gray-200">ไทย</span>
                </li>
                <li className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-300">ศาสนา :</span>
                    <span className="text-gray-700 dark:text-gray-200">พุทธ</span>
                </li>
            </ul>
        </>
    )
}

export const Skills = () => {
  return (
    <>
        <ul className="grid grid-cols-3 gap-4 space-y-2">
            <li className="flex justify-center items-center">
                <PhythonIcon />
            </li>
            <li className="flex justify-center items-center">
                <PHPIcon />
            </li>
            <li className="flex justify-center items-center">
                <img className='rounded-full' src="chatgpticon.jpg" width={65} />
            </li>
            <li className="flex justify-center items-center">
                <JavaScriptIcon />
            </li>
            <li className="flex justify-center items-center">
                <ReactIcon />
            </li>
            <li className="flex justify-center items-center">
                <TypeScriptIcon />
            </li>
        </ul>
    </>  
    )
}


export default InfoSec