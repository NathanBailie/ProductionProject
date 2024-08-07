import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/LinkIcons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/LinkIcons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/LinkIcons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/LinkIcons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteMain, getRouteAbout, getRouteArticles, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Main',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'About',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteArticles(),
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
