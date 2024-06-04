import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        let options = {
            root: wrapperRef.current,
            rootMargin: "0px",
            threshold: 1.0,
        };

        let observer = new IntersectionObserver(([entry]) => {

        }, options);
        observer.observe(triggerRef.current);

        return () => {
            if (observer) {
                observer.unobserve(triggerRef.current);
            }
        }
    }, [triggerRef, wrapperRef]);

}
