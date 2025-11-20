import { writable } from "svelte/store"

type Theme = "dark" | "light"

function createThemeStore() {
  let initialTheme: Theme = "dark"

  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored) {
      initialTheme = stored
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      initialTheme = "light"
    }
  }

  const { subscribe, set } = writable<Theme>(initialTheme)

  return {
    subscribe,
    setTheme: (theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme)
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
      }
      set(theme)
    },
    toggle: () => {
      subscribe((current) => {
        const newTheme = current === "dark" ? "light" : "dark"
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", newTheme)
          document.documentElement.classList.remove("light", "dark")
          document.documentElement.classList.add(newTheme)
        }
        set(newTheme)
        return newTheme
      })()
    },
  }
}

export const theme = createThemeStore()
