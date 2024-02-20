import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkMode = '(prefer-color-schem: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkMode);
    const userPreference = window.localStorage.getItem('theme');

    const addClassToHTML = (check: string) => {
      if (check === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === 'dark' ? 'dark' : 'light';
        setMode(check);
        addClassToHTML(check);
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light';
        setMode(check);
        addClassToHTML(check);
      }
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
