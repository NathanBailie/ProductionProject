import { useState, useMemo, type FC } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
