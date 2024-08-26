import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/Stack';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.CommentItem, {}, [
                    className,
                    cls.loading,
                ])}
                data-testid="CommentItem.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            max
            gap="8"
            className={classNames(cls.CommentItem, {}, [className])}
            data-testid="CommentItem.Content"
        >
            <AppLink
                className={cls.header}
                to={getRouteProfile(comment.user.id)}
            >
                {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
