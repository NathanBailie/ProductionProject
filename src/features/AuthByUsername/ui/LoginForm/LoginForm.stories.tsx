import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: {
        username: 'username',
        password: 'password',
    },
})];

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {};
LightIsLoading.decorators = [StoreDecorator({
    loginForm: {
        username: 'username',
        password: 'password',
        isLoading: true,
    },
})];

export const LightWithError = Template.bind({});
LightWithError.args = {};
LightWithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'username',
        password: 'password',
        error: 'error',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
        },
    })];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {};
DarkIsLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
            isLoading: true,
        },
    })];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
            error: 'error',
        },
    })];
