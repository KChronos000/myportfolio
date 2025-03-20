import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from './Svgicon';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  // ฟังก์ชันตรวจสอบและตั้งค่าธีมตามการตั้งค่าของเครื่อง
  const setSystemTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    setSystemTheme(); // ตั้งค่าธีมเริ่มต้นเมื่อโหลด
    // ติดตามการเปลี่ยนแปลงการตั้งค่าของเครื่อง
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setSystemTheme(); // รีเฟรชธีมเมื่อมีการเปลี่ยนแปลง
    };
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange); // ลบ event listener เมื่อไม่ใช้แล้ว
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-200"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <SunIcon />
      ) : (
        <MoonIcon/>
      )}
    </button>
  );
}

export default ThemeToggle;
