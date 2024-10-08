import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock =
    | ArticleImageBlock
    | ArticleTextBlock
    | ArticleCodeBlock;

export interface Article {
    id: string;
    type: ArticleType[];
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    blocks: ArticleBlock[];
    user: User;
}
