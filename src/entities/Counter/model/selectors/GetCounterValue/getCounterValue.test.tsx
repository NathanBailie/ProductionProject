import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('Testing of returning the value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 5 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(5);
    });
});
