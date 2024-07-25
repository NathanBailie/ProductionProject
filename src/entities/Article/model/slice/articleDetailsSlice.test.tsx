import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleBlockType, ArticleType } from '../consts/consts';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 999,
    createdAt: '16.10.2023',
    user: {
        id: '1',
        username: 'Nathan',
    },
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

describe('articleDetailsSlice.test', () => {
    test('Test extra reducer fetchArticleById pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
        });
    });

    test('Test extra reducer fetchArticleById fullfiled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            data,
        });
    });
});
