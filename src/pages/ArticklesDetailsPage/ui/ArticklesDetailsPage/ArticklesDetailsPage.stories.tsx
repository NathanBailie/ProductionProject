import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticklesDetailsPage from './ArticklesDetailsPage';

export default {
    title: 'pages/ArticklesDetailsPage',
    component: ArticklesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticklesDetailsPage>;

const Template: ComponentStory<typeof ArticklesDetailsPage> = () => <ArticklesDetailsPage />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 999,
    createdAt: '16.10.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'paragraph',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<p id="hello"></p>',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'paragraph',
            ],
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
