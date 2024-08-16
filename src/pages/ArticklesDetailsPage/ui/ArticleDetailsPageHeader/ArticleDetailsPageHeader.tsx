import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import {
    getRouteArticles,
    getRouteArticleDetails,
} from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('article');

        const navigate = useNavigate();
        const userData = useSelector(getUserAuthData);
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleDetails(article.id));
            }
        }, [article, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                    {t('Back to list')}
                </Button>
                {canEdit && (
                    <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Redaction')}
                    </Button>
                )}
            </HStack>
        );
    },
);
