import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'text',
};

export const PrimarySizeS = Template.bind({});
PrimarySizeS.args = {
    title: 'title',
    text: 'text',
    size: TextSize.S,
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    title: 'title',
    text: 'text',
    size: TextSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    title: 'title',
    text: 'text',
    size: TextSize.L,
};

export const Error = Template.bind({});
Error.args = {
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
};

export const OnlyWithTitle = Template.bind({});
OnlyWithTitle.args = {
    title: 'title',
};

export const OnlyWithText = Template.bind({});
OnlyWithText.args = {
    text: 'text',
};

export const PrimaryDarkSizeS = Template.bind({});
PrimaryDarkSizeS.args = {
    title: 'title',
    text: 'text',
    size: TextSize.S,
};
PrimaryDarkSizeS.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkSizeM = Template.bind({});
PrimaryDarkSizeM.args = {
    title: 'title',
    text: 'text',
    size: TextSize.M,
};
PrimaryDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkSizeL = Template.bind({});
PrimaryDarkSizeL.args = {
    title: 'title',
    text: 'text',
    size: TextSize.L,
};
PrimaryDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title',
    text: 'text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyWithTitleDark = Template.bind({});
OnlyWithTitleDark.args = {
    title: 'title',
};
OnlyWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyWithTextDark = Template.bind({});
OnlyWithTextDark.args = {
    text: 'text',
};
OnlyWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];
