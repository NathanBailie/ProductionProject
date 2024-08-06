import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/ThemeSwitcher/light-theme.svg';
import DarkIcon from '@/shared/assets/icons/ThemeSwitcher/dark-theme.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, themeToggler } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(
                '',
                {},
                [className],
            )}
            onClick={themeToggler}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
