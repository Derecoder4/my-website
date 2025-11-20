import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createTheme() {
  const { subscribe, set, update } = writable<'light' | 'dark'>('dark');

  function setTheme(newTheme: 'light' | 'dark') {
    set(newTheme);
    if (browser) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    }
  }

  function toggle() {
    update(current => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      if (browser) {
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      }
      return newTheme;
    });
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
    subscribe,
    setTheme,
    toggle
  };
}

export const theme = createTheme();
