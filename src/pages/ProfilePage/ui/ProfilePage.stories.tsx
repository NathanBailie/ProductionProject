import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/Avatar/avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Nathan',
                lastname: 'Bailie',
                age: 31,
                currency: Currency.TRY,
                country: Country.TURKEY,
                city: 'Mersin',
                username: 'admin',
                avatar,
            },
        },
    }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Nathan',
                lastname: 'Bailie',
                age: 31,
                currency: Currency.TRY,
                country: Country.TURKEY,
                city: 'Mersin',
                username: 'admin',
                avatar,
            },
        },
    }),
];
