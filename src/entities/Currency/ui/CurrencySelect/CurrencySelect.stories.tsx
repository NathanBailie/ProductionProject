import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entity/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectLight = Template.bind({});
CurrencySelectLight.args = {

};

export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.args = {

};
CurrencySelectDark.decorators = [ThemeDecorator(Theme.DARK)];
