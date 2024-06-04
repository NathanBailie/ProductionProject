import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entity/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountrySelectLight = Template.bind({});
CountrySelectLight.args = {};

export const CountrySelectDark = Template.bind({});
CountrySelectDark.args = {};
CountrySelectDark.decorators = [ThemeDecorator(Theme.DARK)];
