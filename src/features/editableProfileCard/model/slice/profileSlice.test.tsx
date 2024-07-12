import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileErrors } from '../types/editableProfileCardSchema';

const data = {
    first: 'Nathan',
    lastname: 'Bailie',
    age: 31,
    currency: Currency.TRY,
    country: Country.TURKEY,
    city: 'Mersin',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('Test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('Test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { first: '' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            data,
            form: data,
            validateErrors: undefined,
        });
    });

    test('Test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: 'Mike' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    first: 'Mike',
                }),
            ),
        ).toEqual({
            form: { first: 'Mike' },
        });
    });

    test('Test extra reducer updateProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('Test extra reducer updateProfileData fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined,
        });
    });
});
