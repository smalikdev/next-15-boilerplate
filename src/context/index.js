import { createContext, useContext, useState, useEffect } from "react"

const context = createContext() //context

export const ContextProvider = ({ children }) => {
  //ContextProvider
  const [theme, setTheme] = useState("light")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return <context.Provider value={{ theme, toggleTheme, sidebarOpen, toggleSidebar }}>{children}</context.Provider>
}

// Custom hook to use the theme context
export const AppContext = () => useContext(context) //AppContext
