import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAligns {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    S = 's',
    M = 'm',
    L = 'l',
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAligns,
    size?: TextSize,
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaerTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.NORMAL,
        align = TextAligns.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaerTag[size];

    return (
        <div className={classNames(
            cls.Text,
            {},
            [className, cls[theme], cls[align], cls[size]],
        )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
