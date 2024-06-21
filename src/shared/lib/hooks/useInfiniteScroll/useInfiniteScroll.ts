import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElem = wrapperRef.current;
        const triggerElem = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElem,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElem);
        }

        return () => {
            if (observer && triggerElem) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElem);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
