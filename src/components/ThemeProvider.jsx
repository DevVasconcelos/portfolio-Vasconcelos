'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const currentTheme = document.documentElement.dataset.theme;

        if (currentTheme === 'light' || currentTheme === 'dark') {
            setTheme(currentTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

export { THEME_STORAGE_KEY };