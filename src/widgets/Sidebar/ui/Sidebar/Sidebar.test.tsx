import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Tests for Sidebar component', () => {
    test('Test for rendering', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test of collapsing of the sidebar', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggler');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
