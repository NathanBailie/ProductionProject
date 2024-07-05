import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main page')}
        </Page>
    );
};

export default MainPage;
