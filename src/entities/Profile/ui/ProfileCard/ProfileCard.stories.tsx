import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/Avatar/avatar.jpg';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Nathan',
        lastname: 'Bailie',
        age: 31,
        currency: Currency.TRY,
        country: Country.TURKEY,
        city: 'Mersin',
        username: 'admin',
        avatar,
    },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    data: {
        first: 'Nathan',
        lastname: 'Bailie',
        age: 31,
        currency: Currency.TRY,
        country: Country.TURKEY,
        city: 'Mersin',
        username: 'admin',
        avatar,
    },
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {
    error: 'error',
};
WithErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const WithLoading = Template.bind({});
WithLoading.args = {
    loading: true,
};

export const WithLoadingDark = Template.bind({});
WithLoadingDark.args = {
    loading: true,
};
WithLoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
