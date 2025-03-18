import { useState } from 'react';
import { MoonIcon, SunIcon } from './Svgicon';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

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
      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-200"
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
