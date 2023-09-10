import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'shared/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
