import { createContext } from 'react';

export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.Dark,
    toggleTheme: () => null,
});
