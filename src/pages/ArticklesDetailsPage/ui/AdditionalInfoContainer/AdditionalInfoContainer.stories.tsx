import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';
import { Article } from '@/entities/Article';

export default {
    title: 'pages/ArticklesDetailsPage/AdditionalInfoContainer',
    component: AdditionalInfoContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), NewDesignDecorator],
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = () => (
    <AdditionalInfoContainer />
);

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 5,
    createdAt: '16.10.2023',
    type: [],
    user: {
        id: '1',
        username: 'Nathan',
    },
    blocks: [],
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];
