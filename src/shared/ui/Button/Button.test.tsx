import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Tests for Button component', () => {
    test('Test for rendering', () => {
        render(<Button>TestButton</Button>);
        expect(screen.getByText('TestButton')).toBeInTheDocument();
    });

    test('Test for the buttons theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TestButton</Button>);
        expect(screen.getByText('TestButton')).toHaveClass('clear');
        screen.debug();
    });
});
