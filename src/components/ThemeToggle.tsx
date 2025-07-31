import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800 hover:bg-gray-700 text-white' 
          : 'bg-white hover:bg-gray-100 text-gray-800'
      } shadow-lg`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;