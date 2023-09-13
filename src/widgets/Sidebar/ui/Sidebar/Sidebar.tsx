import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/LinkIcons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/LinkIcons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePaths.main}
                    className={cls.item}
                    theme={AppLinkTheme.INVERTED}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePaths.about}
                    className={cls.item}
                    theme={AppLinkTheme.INVERTED}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggler"
                className={cls.CollapseButton}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
