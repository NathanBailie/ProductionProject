import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme, themeToggler } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <button onClick={themeToggler}>Togglt theme</button>
            <AppRouter />
        </div>
    );
};

export default App;