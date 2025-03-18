"use client"
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Bulb } from './Svgicon'

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-500/90 via-violet-400/90 to-sky-300/90 dark:bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            {/* Left section: Logo/Icon */}
            <div className="flex justify-center items-center gap-2">
                <span className="flex items-center text-2xl font-bold text-white dark:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">
                  <Bulb/>Portfolio
                </span>
            </div>

            {/* Middle section: Navbar Links */}
            <div className="flex justify-center gap-6">
                <span className="text-gray-800 hover:text-purple-800 cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">หน้าแรก</span>
                <span className="text-gray-800 hover:text-purple-800 cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">แนะนำตัวเอง</span>
                <span className="text-gray-800 hover:text-purple-800 cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">ผลงาน</span>
                <span className="text-gray-800 hover:text-purple-800 cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">เกียรติบัตร</span>
            </div>

            {/* Right section: Search Bar */}
            <div className="flex justify-center items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="p-2 border-2 dark:border-slate-700 dark:bg-gray-900 rounded-full text-black hover:transition-all hover:duration-300 hover:scale-105"
                />
                <button className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400 hover:transition-all hover:duration-300 hover:scale-105">Search</button>
                <ThemeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
