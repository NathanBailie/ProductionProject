import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string,
    content: string,
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean,
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const mods: Mods = {};
    const onChangehandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map((elem) => (
        <option
            className={cls.option}
            value={elem.value}
            key={elem.value}
        >
            {elem.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(
            cls.Wrapper,
            mods,
            [className],
        )}
        >
            {label && (
                <span className={cls.label}>
                    {`${label} >`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangehandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
