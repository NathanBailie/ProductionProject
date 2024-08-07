import { ChangeEvent, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T,
    content: string,
}

interface SelectProps<T extends string> {
    className?: string,
    label?: string,
    options?: SelectOptions<T>[],
    value?: T,
    onChange?: (value: T) => void,
    readonly?: boolean,
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
};
