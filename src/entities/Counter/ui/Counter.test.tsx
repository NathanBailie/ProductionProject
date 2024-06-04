import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test for rendering', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('5');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('6');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('4');
    });
});
