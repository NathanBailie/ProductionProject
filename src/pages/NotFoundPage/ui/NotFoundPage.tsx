import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string,
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('notFound');

    return (
        <div className={classNames(
            cls.NotFoundPage,
            {},
            [className],
        )}
        >
            {t('Not found')}
        </div>
    );
};
