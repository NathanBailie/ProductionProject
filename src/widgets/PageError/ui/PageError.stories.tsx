import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
