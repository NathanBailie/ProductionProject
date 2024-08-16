import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Return error string', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isError: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('Running with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
