import { useState, useLayoutEffect } from 'react';
import { MoonIcon, SunIcon } from './Svgicon';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    // ตรวจสอบว่าเครื่องใช้ธีมมืดหรือไม่
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // ตรวจสอบใน localStorage ว่ามีการตั้งค่า theme ไว้หรือไม่
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    // ตั้งค่า theme ให้เร็วที่สุดก่อนการเรนเดอร์
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // ตั้งค่า theme ใหม่
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // เก็บข้อมูลใน localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-[#ead582] text-white dark:bg-black text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-200"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}

export default ThemeToggle;
