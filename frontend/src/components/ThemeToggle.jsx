import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2.5 rounded-xl glass hover:bg-white/20 transition-all duration-300 text-slate-500 dark:text-slate-300 hover:text-primary dark:hover:text-white group"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5">
        <div className={`absolute inset-0 transform transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
          <Sun size={20} />
        </div>
        <div className={`absolute inset-0 transform transition-all duration-500 ${!isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
          <Moon size={20} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
