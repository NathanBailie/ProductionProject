import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticklesDetailsPage from './ArticklesDetailsPage';

export default {
    title: 'pages/ArticklesDetailsPage',
    component: ArticklesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticklesDetailsPage>;

const Template: ComponentStory<typeof ArticklesDetailsPage> = () => <ArticklesDetailsPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
