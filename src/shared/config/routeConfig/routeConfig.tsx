import { AboutPage } from 'pages/AboutPage';
import { ArticlesPage } from 'pages/ArticklesPage';
import { ArticlesDetailsPage } from 'pages/ArticklesDetailsPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { type RouteProps } from 'react-router-dom';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { UserRole } from 'entities/User';
import { ForbiddenPage } from 'pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean,
    roles?: UserRole[]
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'article_details',
    ARTICLES_CREATE = 'article_create',
    ARTICLES_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN_PAGE = 'forbidden',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/',
    [AppRoutes.ARTICLES_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN_PAGE]: '/forbidden',
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
        path: `${RoutePaths.profile}:id`,
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
        element: <ArticlesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${RoutePaths.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${RoutePaths.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePaths.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.USER],
    },
    [AppRoutes.FORBIDDEN_PAGE]: {
        path: `${RoutePaths.forbidden}`,
        element: <ForbiddenPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage />,
    },
};
