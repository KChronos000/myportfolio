"use client"
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { Bulb, LoginIcon } from './Svgicon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ✅ ถ้าอยู่บนสุดของหน้าเลย ให้ Navbar โชว์แบบเต็ม
      if (currentScrollY === 0) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setShowNavbar(true);
        return;
      }

      if (currentScrollY > lastScrollY) {
        // 👇 กำลังเลื่อนลง
        setShowNavbar(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setShowNavbar(false);
        }, 2000); // หายไปหลังจาก 2 วิ
      } else {
        // 👆 กำลังเลื่อนขึ้น
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lastScrollY]);

  return (
    <div className={`w-full fixed top-0 z-[99999999999999999] transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} bg-gradient-to-r from-pink-500/90 via-violet-400/90 to-sky-300/90 dark:bg-gray-900 py-4`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex justify-start items-center gap-2">
          <span className="flex items-center text-2xl font-bold text-white dark:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">
            <Bulb /> Portfolio
          </span>
        </div>

        <div className="hidden md:flex justify-center gap-6 items-center">
          <a href="/"><span className="text-gray-800 dark:text-gray-100 hover:text-purple-100 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">หน้าแรก</span></a>
          <a href="/personalinfo"><span className="text-gray-800 dark:text-gray-100 hover:text-purple-100 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">เกี่ยวกับตัวฉัน</span></a>
          <a href="/works"><span className="text-gray-800 dark:text-gray-100 hover:text-purple-100 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">ผลงาน</span></a>
          <a href="/certificates"><span className="text-gray-800 dark:text-gray-100 hover:text-purple-100 dark:hover:text-black cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">เกียรติบัตร</span></a>
        </div>

        <div className="hidden md:flex justify-end items-center gap-4">
          <a href="/login">
            <button className='flex gap-1 bg-white dark:bg-black px-4 py-2 rounded-full hover:bg-violet-400 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white hover:transition-all hover:duration-300 hover:scale-105' type="button">
              Log-in <LoginIcon />
            </button>
          </a>
          <ThemeToggle />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 transition-all ease-in-out duration-300`}>
        <div className="flex flex-col gap-1 items-center py-2">
          <a href="/"><span className="dark:text-gray-200 py-2 hover:text-purple-800 cursor-pointer">หน้าแรก</span></a>
          <a href="/personalinfo"><span className="dark:text-gray-200 py-2 hover:text-purple-800 cursor-pointer">เกี่ยวกับตัวฉัน</span></a>
          <a href="/works"><span className="dark:text-gray-200 py-2 hover:text-purple-800 cursor-pointer">ผลงาน</span></a>
          <a href="/certificates"><span className="dark:text-gray-200 py-2 hover:text-purple-800 cursor-pointer">เกียรติบัตร</span></a>
          <a href="/login">
            <button className='flex gap-1 border dark:border-none bg-white dark:bg-black px-4 py-2 rounded-full hover:bg-violet-400 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white hover:transition-all hover:duration-300 hover:scale-105' type="button">
              Log-in <LoginIcon />
            </button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
    