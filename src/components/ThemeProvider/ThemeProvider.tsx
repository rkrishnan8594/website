import { useState } from 'react';
import { Theme, ThemeContext } from 'context/theme';

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const [theme, setTheme] = useState(Theme.Dark);
    const toggleTheme = (currTheme: Theme) => (currTheme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark));
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
