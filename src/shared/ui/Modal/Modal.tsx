import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
    children?: ReactNode,
    lazy?: boolean
}

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}: ModalProps) => {
    const { theme } = useTheme();
    const ANIM_DELAY = 300;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIM_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(
                `${cls.Modal} ${theme}`,
                mods,
                [className, 'app_modal'],
            )}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
