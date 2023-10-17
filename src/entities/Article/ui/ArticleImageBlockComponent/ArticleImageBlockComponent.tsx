import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAligns } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string,
    block: ArticleImageBlock,
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(
            cls.ArticleImageBlockComponent,
            {},
            [className],
        )}
        >
            <img
                className={cls.img}
                src={block.src}
                alt={block.title}
            />
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAligns.CENTER}
                />
            )}
        </div>
    );
});
