import { browser } from '$app/environment';

function createTheme() {
  let current = $state<'light' | 'dark'>('dark');

  function setTheme(newTheme: 'light' | 'dark') {
    current = newTheme;
    if (browser) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    }
  }

  function toggle() {
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  if (browser) {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return {
    get current() {
      return current;
    },
    setTheme,
    toggle
  };
}

export const theme = createTheme();
