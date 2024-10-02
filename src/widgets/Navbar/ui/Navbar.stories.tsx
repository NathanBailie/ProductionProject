import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightAuthorized = Template.bind({});
LightAuthorized.args = {};
LightAuthorized.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const DarkAuthorized = Template.bind({});
DarkAuthorized.args = {};
DarkAuthorized.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];

export const OrangeAuthorized = Template.bind({});
OrangeAuthorized.args = {};
OrangeAuthorized.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        user: { authData: {} },
    }),
];
