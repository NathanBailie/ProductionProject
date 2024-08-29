import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import {
    Text as TextDeprecated,
    TextAligns,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Profile error')}
                text={t('Reload your page')}
                align={TextAligns.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedSpinner = () => (
    <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, { [cls.loading]: true })}
    >
        <Spinner />
    </HStack>
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap="8"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}

            <InputDeprecated
                value={data?.first}
                placeholder={t('Name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.age"
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Avatar link')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
