import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticklesDetailsPageProps {
    className?: string,
}

const ArticklesDetailsPage = ({ className }: ArticklesDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(
                '',
                {},
                [className],
            )}
            >
                {t('Article was not found')}
            </div>
        );
    }

    return (
        <div className={classNames(
            '',
            {},
            [className],
        )}
        >
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticklesDetailsPage);
