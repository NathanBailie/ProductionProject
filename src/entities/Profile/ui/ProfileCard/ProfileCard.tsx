import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAligns, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency/model/types/Currency';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile,
    loading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCurrency?: (currency?: Currency) => void,
    onChangeCountry?: (country?: Country) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
}

export const ProfileCard = ({
    className,
    data,
    loading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCurrency,
    onChangeCountry,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (loading) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                {},
                [className, cls.loading],
            )}
            >
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                {},
                [className, cls.error],
            )}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Profile error')}
                    text={t('Reload your page')}
                    align={TextAligns.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(
            cls.ProfileCard,
            mods,
            [className],
        )}
        >
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                        />
                    </div>
                )}

                <Input
                    value={data?.first}
                    placeholder={t('Name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
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
            </div>
        </div>
    );
};
