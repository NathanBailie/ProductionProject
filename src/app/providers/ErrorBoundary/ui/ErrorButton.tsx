import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ErrorButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button type="button" onClick={throwError}>{t('Throw error')}</button>
    );
};
