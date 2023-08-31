import './styles/index.scss';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './Pages/MainPage/MainPage.async';
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';
import { useTheme } from './ThemeContext/useTheme';
import { classNames } from './classNames/classNames';

export const App = () => {
    const { theme, themeToggler } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <button onClick={themeToggler}>Togglt theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
