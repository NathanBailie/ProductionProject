import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Main page')}
            <ErrorButton />
        </div>
    );
};

export default MainPage;
