import { createContext, useContext } from 'react';


// can pass default value in createContext
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})


// provider -- wrap children in it
export const ThemeProvider = ThemeContext.Provider


// custom hook -- useTheme hook to extract ThemeContext values
export default function useTheme() {
    return useContext(ThemeContext)
}
