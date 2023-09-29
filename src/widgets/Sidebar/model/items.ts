import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/LinkIcons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/LinkIcons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/LinkIcons/profile-20-20.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Profile',
    },
];