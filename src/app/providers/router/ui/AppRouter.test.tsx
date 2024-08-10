import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteProfile, getRouteAdmin } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/AppRouter', () => {
    test('The page must be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('The page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/asdfghjkl',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect unauthorized user to the main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to closed page for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _initialized: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access denied (no role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _initialized: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access is allowed (role present)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _initialized: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
