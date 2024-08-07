import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    (Story: Story) => (
        <div style={{ background: '#090949' }}>
            <Story />
        </div>
    ),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    (Story: Story) => (
        <div style={{ background: '#e8e8ea' }}>
            <Story />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];
