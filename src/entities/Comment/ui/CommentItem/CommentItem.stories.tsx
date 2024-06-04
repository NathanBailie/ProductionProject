import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentItem } from './CommentItem';

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'Text',
        user: { id: '1', username: 'Ivan' },
    },
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    comment: {
        id: '1',
        text: 'Text',
        user: { id: '1', username: 'Ivan' },
    },
    isLoading: true,
};
