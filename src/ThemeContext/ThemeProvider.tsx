import { useState, useMemo, FC } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
