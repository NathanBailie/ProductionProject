import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticklesDetailsPage.module.scss';

interface ArticklesDetailsPageProps {
    className?: string,
}

const ArticklesDetailsPage = ({ className }: ArticklesDetailsPageProps) => {
    const { t } = useTranslation('artickle');

    return (
        <div className={classNames(
            cls.ArticklesDetailsPage,
            {},
            [className],
        )}
        >
            Artickles Detail Page
        </div>
    );
};

export default memo(ArticklesDetailsPage);
