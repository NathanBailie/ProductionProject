import { getQueryParams } from './addQueryParams';

describe('test getQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({ first: 'abc' });
        expect(params).toBe('?first=abc');
    });
    test('with two params', () => {
        const params = getQueryParams({
            first: '1',
            second: '2',
        });
        expect(params).toBe('?first=1&second=2');
    });
    test('with three params', () => {
        const params = getQueryParams({
            first: '1',
            second: '2',
            third: '3',
        });
        expect(params).toBe('?first=1&second=2&third=3');
    });
    test('with undefined', () => {
        const params = getQueryParams({
            first: 'abc',
            second: undefined,
        });
        expect(params).toBe('?first=abc');
    });
});
