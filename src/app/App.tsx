import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const { theme, themeToggler } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={themeToggler}>Togglt theme</button>
            <AppRouter />
        </div>
    );
};

export default App;