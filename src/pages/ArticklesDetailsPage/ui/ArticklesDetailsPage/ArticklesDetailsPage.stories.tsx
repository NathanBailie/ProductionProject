import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesDetailsPage from './ArticlesDetailsPage';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ArticklesDetailsPage/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => (
    <ArticlesDetailsPage {...args} />
);

const article: Article = {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    img: '',
    views: 999,
    createdAt: '16.10.2023',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Nathan',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title',
            paragraphs: ['paragraph'],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<p id="hello"></p>',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title',
            paragraphs: ['paragraph'],
        },
    ],
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
