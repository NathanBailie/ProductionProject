import './styles/index.scss';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib/classNames';

const App = () => {
    const { theme, themeToggler } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <button onClick={themeToggler}>Togglt theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;