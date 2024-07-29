import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePaths } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/LinkIcons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/LinkIcons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/LinkIcons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/LinkIcons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePaths.main,
                Icon: MainIcon,
                text: 'Main',
            },
            {
                path: RoutePaths.about,
                Icon: AboutIcon,
                text: 'About',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePaths.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
                {
                    path: RoutePaths.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
