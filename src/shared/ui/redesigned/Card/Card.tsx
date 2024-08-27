import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        variant = 'normal',
        children,
        max,
        padding = '8',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };
    const paddingClass = mapPaddingToClass[padding];
    const additionalClasses = [className, cls[variant], cls[paddingClass]];

    return (
        <div
            className={classNames(cls.Card, mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </div>
    );
});
