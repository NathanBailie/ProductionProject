import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={t('Loading')}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
