import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../consts/consts';

const data = {
    first: 'Nathan',
    lastname: 'Bailie',
    age: 31,
    currency: Currency.TRY,
    country: Country.TURKEY,
    city: 'Mersin',
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('Without firstname and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ]);
    });

    test('Age is incorrect', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });

    test('Country is incorrect', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });

    test('With all errors', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
            age: undefined,
            country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
});
