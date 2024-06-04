import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/Avatar/avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Main = Template.bind({});
Main.args = {
    size: 100,
    src: AvatarImg,
};
export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};

export const Big = Template.bind({});
Big.args = {
    size: 150,
    src: AvatarImg,
};
