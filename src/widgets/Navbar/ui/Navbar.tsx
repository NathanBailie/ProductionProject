import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';


interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink to={'/about'} >About</AppLink>
            </div>
        </div>
    );
};
