import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../model/types/Country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean,
}

const options = [
    { value: Country.TURKEY, content: Country.TURKEY },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.ARMENIA, content: Country.ARMENIA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Country')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            defaultValue={t('Country')}
            direction="top right"
        />
    );
});
