import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 5 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
    });

    test('decrement', () => {
        const state: CounterSchema = { value: 5 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
    });

    test('undefined state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
