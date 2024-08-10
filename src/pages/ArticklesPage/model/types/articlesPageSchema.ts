import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sorts';

export interface articlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit: number
    hasMore: boolean

    // filters
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _inited: boolean
}
