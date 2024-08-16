import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'Comment 1',
            user: { id: '1', username: 'Ivan' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Sergey' },
        },
    ],
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    comments: [],
    isLoading: true,
};
