import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, alt, size = 100 } = props;
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
