import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '../..';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
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
            title: 'Заголовок этого блока',
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
            title: 'Заголовок этого блока',
            paragraphs: ['paragraph'],
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];
