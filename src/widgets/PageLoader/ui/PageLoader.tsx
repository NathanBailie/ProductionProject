import { classNames } from 'shared/lib/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string,
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(
        cls.PageLoader,
        {},
        [className],
    )}
    >
        <Spinner />
    </div>
);
