import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
    className?: string,
    children: ReactNode,
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: () => console.log(123)
    })

    return (
        <section ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef}>

            </div>
        </section>
    );
});
