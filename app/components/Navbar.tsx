"use client"
import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Bulb } from './Svgicon'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // สร้าง state สำหรับเปิด/ปิดเมนู

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // สลับการแสดงเมนู
  };

  return (
    <div className="w-full bg-gradient-to-r from-pink-500/90 via-violet-400/90 to-sky-300/90 dark:bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left section: Logo/Icon */}
        <div className="flex justify-start items-center gap-2">
          <span className="flex items-center text-2xl font-bold text-white dark:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">
            <Bulb /> Portfolio
          </span>
        </div>

        {/* Middle section: Navbar Links */}
        <div className="hidden md:flex justify-center gap-6 items-center"> {/* ซ่อนเมนูนี้ในหน้าจอขนาดเล็ก */}
          <span className="text-gray-800 dark:text-gray-900 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">หน้าแรก</span>
          <span className="text-gray-800 dark:text-gray-900 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">แนะนำตัวเอง</span>
          <span className="text-gray-800 dark:text-gray-900 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">ผลงาน</span>
          <span className="text-gray-800 dark:text-gray-900 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">เกียรติบัตร</span>
        </div>

        {/* Right section: Search Bar and Theme Toggle */}
        <div className="hidden md:flex justify-end items-center gap-2"> {/* ขยายไปที่ด้านขวาสำหรับขนาดหน้าจอใหญ่ */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 border-2 dark:border-slate-800 dark:bg-gray-700 rounded-full text-black hover:transition-all hover:duration-300 hover:scale-105"
          />
          <button className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400 hover:transition-all hover:duration-300 hover:scale-105">Search</button>
          <ThemeToggle />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 transition-all ease-in-out duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-20'}`} 
        style={{ transition: 'transform 0.3s ease-in-out' }} // การเคลื่อนที่ในการเปิด/ปิด
      >
        <div className="flex flex-col items-center py-2">
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">หน้าแรก</span>
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">แนะนำตัวเอง</span>
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">ผลงาน</span>
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">เกียรติบัตร</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
