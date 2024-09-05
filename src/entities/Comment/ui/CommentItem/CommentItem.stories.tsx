import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentItem } from './CommentItem';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
    <CommentItem {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'Text',
        user: { id: '1', username: 'Ivan' },
    },
};

export const PrimaryOld = Template.bind({});
PrimaryOld.args = normalArgs;
PrimaryOld.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: false })];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = normalArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const WithLoading = Template.bind({});
WithLoading.args = {
    comment: {
        id: '1',
        text: 'Text',
        user: { id: '1', username: 'Ivan' },
    },
    isLoading: true,
};
