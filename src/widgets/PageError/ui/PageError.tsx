import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const pagereloader = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(
            cls.PageError,
            {},
            [className],
        )}
        >
            <p>{t('Error')}</p>
            <button type="button" onClick={pagereloader}>{t('Reload page')}</button>
        </div>
    );
};
