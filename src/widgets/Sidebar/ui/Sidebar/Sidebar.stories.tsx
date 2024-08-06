import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const AuthorizedLight = Template.bind({});
AuthorizedLight.args = {};
AuthorizedLight.decorators = [
    StoreDecorator(
        {
            user: {
                authData: {},
            },
        },
    ),
];

export const AuthorizedDark = Template.bind({});
AuthorizedDark.args = {};
AuthorizedDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            user: {
                authData: {},
            },
        },
    ),
];

export const UnauthorizedLight = Template.bind({});
UnauthorizedLight.args = {};
UnauthorizedLight.decorators = [
    StoreDecorator(
        {
            user: {},
        },
    ),
];

export const UnauthorizedDark = Template.bind({});
UnauthorizedDark.args = {};
UnauthorizedDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            user: {},
        },
    ),
];
