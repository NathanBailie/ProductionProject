import { classNames } from '@/shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
    className?: string;
}

/**
 * Deprecated, use the new component from the redesigned folder
 * @deprecated
 */

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
