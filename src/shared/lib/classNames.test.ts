import { classNames } from './classNames';

describe('Tests for classNames', () => {
    test('With one class only', () => {
        const result = 'oneClass';
        expect(classNames('oneClass')).toBe(result);
    });

    test('With mods', () => {
        const result = 'oneClass active hovered';
        expect(classNames(
            'oneClass',
            { active: true, hovered: true },
        )).toBe(result);
    });

    test('With false mods', () => {
        const result = 'oneClass linked';
        expect(classNames(
            'oneClass',
            {
                hovered: false,
                linked: true,
            },
        )).toBe(result);
    });

    test('With undefined mods', () => {
        const result = 'oneClass active';
        expect(classNames(
            'oneClass',
            {
                active: true,
                linked: undefined,
            },
        )).toBe(result);
    });

    test('With additional classes', () => {
        const result = 'oneClass active';
        expect(classNames(
            'oneClass',
            {},
            [
                'active',
            ],
        )).toBe(result);
    });

    test(
        'With all kind of classes and modes',
        () => {
            const result = 'oneClass active colored';
            expect(classNames(
                'oneClass',
                {
                    active: true,
                    hovered: false,
                    linked: undefined,
                },
                [
                    'colored',
                ],
            )).toBe(result);
        },
    );
});
