import { AboutPage } from 'pages/AboutPage';
import { ArticlesPage } from 'pages/ArticklesPage';
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
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'article_details',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/',
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
    [AppRoutes.ARTICLES]: {
        path: RoutePaths.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePaths.article_details}:id`,
        element: <ArticklesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage />,
    },
};
