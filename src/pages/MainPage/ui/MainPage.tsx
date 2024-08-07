import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Counter />
            {t('Main page')}
        </Page>
    );
};

export default MainPage;
