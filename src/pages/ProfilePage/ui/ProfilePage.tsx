import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
    className?: string,
}

const reducers: ReducersList = {
    profile: profileReducer,

};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(
                '',
                {},
                [className],
            )}
            >
                {t('Profile')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
