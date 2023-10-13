import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticklesPage.module.scss';

interface ArticklesPageProps {
    className?: string,
}

const ArticklesPage = ({ className }: ArticklesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(
            cls.ArticklesPage,
            {},
            [className],
        )}
        >
            Artickles Page
        </div>
    );
};

export default memo(ArticklesPage);
