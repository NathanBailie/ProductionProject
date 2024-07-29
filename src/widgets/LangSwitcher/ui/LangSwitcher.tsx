import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const langToggler = () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en' : 'ru',
        );
    };

    return (
        <Button
            className={classNames(
                '',
                {},
                [className],
            )}
            onClick={langToggler}
            theme={ButtonTheme.CLEAR}
        >
            {short ? t('Short language') : t('Language')}
        </Button>
    );
});
