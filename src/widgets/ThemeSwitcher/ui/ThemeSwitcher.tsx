import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/ThemeSwitcher/light-theme.svg';
import DarkIcon from 'shared/assets/icons/ThemeSwitcher/dark-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string,
};

export const ThemeSwitcher = ({ className
}: ThemeSwitcherProps) => {
    const { theme, themeToggler } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher,
                {},
                [className])}
            onClick={themeToggler}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};