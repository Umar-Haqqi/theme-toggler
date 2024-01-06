import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // toggle theme functionality
  useEffect(() => {
    const htmlElem = document.querySelector("html");
    htmlElem.classList.remove("dark", "light");
    htmlElem.classList.add(themeMode);
  }, [themeMode])


  return (
    <>

      {/* now we have a direct access of these values */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
