"use client"
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Bulb, LoginIcon } from './Svgicon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // สร้าง state สำหรับเปิด/ปิดเมนู
  const [lastScrollY, setLastScrollY] = useState(0); // เก็บตำแหน่งการเลื่อนล่าสุด
  const [isScrollingDown, setIsScrollingDown] = useState(false); // สถานะการเลื่อนลง

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // สลับการแสดงเมนู
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // กำลังเลื่อนลง
        setIsScrollingDown(true);
      } else {
        // กำลังเลื่อนขึ้น
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY); // อัพเดทตำแหน่งการเลื่อนล่าสุด
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // ลบ event listener เมื่อคอมโพเนนต์ถูกทำลาย
    };
  }, [lastScrollY]);

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
        <div className="hidden md:flex justify-center gap-6 items-center">
          <span className="text-gray-800 dark:text-gray-100 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">หน้าแรก</span>
          <span className="text-gray-800 dark:text-gray-100 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">เกี่ยวกับตัวฉัน</span>
          <span className="text-gray-800 dark:text-gray-100 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">ผลงาน</span>
          <span className="text-gray-800 dark:text-gray-100 hover:text-purple-800 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">เกียรติบัตร</span>
        </div>

        {/* Right section: Search Bar and Theme Toggle */}
        <div className="hidden md:flex justify-end items-center gap-4">
          <button className='flex gap-1 bg-white dark:bg-black px-4 py-2 rounded-full hover:bg-violet-400 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white hover:transition-all hover:duration-300 hover:scale-105' type="button">
            Log-in <LoginIcon />
          </button>
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
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 transition-all ease-in-out duration-300 transform ${isMenuOpen ? 'translate-y-0' : isScrollingDown ? '-translate-y-20' : 'translate-y-0'}`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="flex flex-col items-center py-2">
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">หน้าแรก</span>
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">เกี่ยวกับตัวฉัน</span>
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">ผลงาน</span>
          <span className="text-gray-200 py-2 hover:text-purple-800 cursor-pointer">เกียรติบัตร</span>
          <button className='flex gap-1 bg-white dark:bg-black px-4 py-2 rounded-full hover:bg-violet-400 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white hover:transition-all hover:duration-300 hover:scale-105' type="button">
            Log-in <LoginIcon />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
