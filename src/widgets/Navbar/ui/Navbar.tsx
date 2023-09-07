import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={RoutePaths[AppRoutes.MAIN]} className={cls.mainLink}>{t('Main')}</AppLink>
                <AppLink to={RoutePaths[AppRoutes.ABOUT]}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
