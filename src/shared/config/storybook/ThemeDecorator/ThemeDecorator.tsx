import { Story } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app_redesigned ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
