import { AboutPage } from 'pages/AboutPage';
import { ArticklesPage } from 'pages/ArticklesPage';
import { ArticklesDetailsPage } from 'pages/ArticklesDetailsPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean,
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICKLES = 'artickles',
    ARTICKLES_DETAILS = 'artickles_details',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICKLES]: '/artickles',
    [AppRoutes.ARTICKLES_DETAILS]: '/artickles/',
    [AppRoutes.NOT_FOUND]: '/*',
};
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICKLES]: {
        path: RoutePaths.artickles,
        element: <ArticklesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICKLES_DETAILS]: {
        path: `${RoutePaths.artickles_details}:id`,
        element: <ArticklesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage />,
    },
};
