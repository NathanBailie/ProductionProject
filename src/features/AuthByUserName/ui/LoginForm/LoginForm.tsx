import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(
            cls.LoginForm,
            {},
            [className],
        )}
        >
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Username')}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Password')}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginButton}
            >
                {t('Sign in')}
            </Button>
        </div>
    );
};
