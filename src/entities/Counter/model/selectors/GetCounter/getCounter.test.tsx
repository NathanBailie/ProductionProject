import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('Testing of the returning the object with value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 5 });
    });
});
