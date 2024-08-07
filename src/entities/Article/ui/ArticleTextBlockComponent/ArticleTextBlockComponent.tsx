import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock,
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(
            cls.ArticleTextBlockComponent,
            {},
            [className],
        )}
        >
            {block.title && (
                <Text
                    className={cls.title}
                    title={block.title}
                />
            )}
            {block.paragraphs.map((par) => (
                <Text
                    className={cls.paragraph}
                    text={par}
                    key={par}
                />
            ))}
        </div>
    );
});
