import { act, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    const state = { counter: { value: 5 } };

    // test('Test for rendering', () => {
    //     componentRender(<Counter />, {
    //         initialState: state,
    //     });
    //     expect(screen.getByTestId('value-title')).toHaveTextContent('5');
    // });

    // test('Have increment button', () => {
    //     componentRender(<Counter />, {
    //         initialState: state,
    //     });
    //     const incrementButton = screen.getByTestId('increment-btn');
    //     expect(incrementButton).toBeInTheDocument();
    //     expect(incrementButton).toHaveTextContent('Increment');
    // });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        act(() => {
            userEvent.click(screen.getByTestId('increment-btn'));
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('6');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        act(() => {
            userEvent.click(screen.getByTestId('decrement-btn'));
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('4');
    });

    test('add 6', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        act(() => {
            userEvent.click(screen.getByTestId('increment-btn6'));
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
