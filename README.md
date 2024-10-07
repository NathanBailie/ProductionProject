# Production Product

## Description

This course project is an SPA with articles. Special attention is given to automation and optimization of various processes. It includes lazy loading of content, asynchronous reducers, and more. All dependencies are manually installed, allowing flexible environment management. The project features a custom component library that significantly simplifies layout and interface maintenance. The application state is managed using the Redux state manager. A profile page with editable data is implemented, along with forms, user authentication and authorization, and various types of content sorting. Navigation within the application is handled through routing, making it easy for users to navigate the blog's functionality. The project is developed following the Feature-Sliced Design architectural methodology. It covers many aspects of development, including architecture, user interface, and server interaction.

---

## Screenshots

<img src="https://github.com/NathanBailie/ProductionProject/raw/main/src/shared/assets/screenshots/black.png" width="520" />
<img src="https://github.com/NathanBailie/ProductionProject/raw/main/src/shared/assets/screenshots/yellow1.png" width="520" />
<img src="https://github.com/NathanBailie/ProductionProject/raw/main/src/shared/assets/screenshots/light.png" width="520" />
<img src="https://github.com/NathanBailie/ProductionProject/raw/main/src/shared/assets/screenshots/yellow2.png" width="520" />

---

## Project website

You can watch this project here - [Click](https://frontwebdev.ru/ 'Click to visit the project website')

---

## Login

To login use this data

-   **login**: admin
-   **password**: 123

or

-   **login**: testuser
-   **password**: 123

---

## Project launch

```
npm install - install dependencies
npm run start:dev или npm run start:dev:vite - running server and frontend project in development mode
```

---

## Scripts

-   `npm run start` - Launch the frontend project on the webpack dev server
-   `npm run start:vite` - Launch the frontend project on vite
-   `npm run start:dev` - Launch the frontend project on the webpack dev server with backend
-   `npm run start:dev:vite` - Launch the frontend project on vite with backend
-   `npm run start:dev:server` - Launch the backend server
-   `npm run build:prod` - Build in production mode
-   `npm run build:dev` - Build in development mode (not minimized)
-   `npm run lint:ts` - Lint TypeScript files
-   `npm run lint:ts:fix` - Fix TypeScript files with the linter
-   `npm run lint:scss` - Lint SCSS files with the style linter
-   `npm run lint:scss:fix` - Fix SCSS files with the style linter
-   `npm run test:unit` - Run unit tests with jest
-   `npm run test:ui` - Run screenshot tests with loki
-   `npm run test:ui:ok` - Approve new screenshot
-   `npm run test:ui:ci` - Run screenshot tests in CI
-   `npm run test:ui:report` - Generate a full report for screenshot tests
-   `npm run test:ui:json` - Generate a JSON report for screenshot tests
-   `npm run test:ui:html` - Generate an HTML report for screenshot tests
-   `npm run storybook` - Launch Storybook
-   `npm run storybook:build` - Build the Storybook build
-   `npm run prepare` - Pre-commit hooks
-   `npm run generate:slice` - Script to generate FSD slices

---

## Project architecture

The project is developed according to the Feature-Sliced Design methodology.

Documentation link - - [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with translations

The project uses the i18next library for handling translations. Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for WebStorm/VSCode

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses 4 types of tests:

1. Regular unit tests with jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with loki - `npm run test:ui`
4. e2e testing with Cypress - `npm run test:e2e`

For more details on tests, see the testing documentation.

More about the tests - [testing documentation](/docs/tests.md)

---

## Linting

The project uses eslint for checking TypeScript code and stylelint for checking style files.

Additionally, for strict control of the main architectural principles, a custom eslint _eslint-plugin-ulbi-tv-plugin_ is used, which contains 3 rules:

1. path-checker - prohibits the use of absolute imports within a single module
2. layer-imports - checks the correct usage of layers from the FSD perspective (e.g., widgets cannot be used in features and entities)
3. public-api-imports - allows imports from other modules only from the public API. It has auto-fix

##### Launch linters

-   `npm run lint:ts` - Lint TypeScript files
-   `npm run lint:ts:fix` - Fix TypeScript files with the linter
-   `npm run lint:scss` - Lint SCSS files with the style linter
-   `npm run lint:scss:fix` - Fix SCSS files with the style linter

---

## Storybook

In the project, story cases are described for each component. Server requests are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the .stories.tsx extension.

You can start Storybook with the command:

-   `npm run storybook`

For more details about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
```

---

## Project configuration

For development, the project contains 2 configs:

1. Webpack - ./config/build
2. Vite - vite.config.ts

Both bundlers are adapted to the main features of the application.

All configuration is stored in /config:

-   /config/babel - babel
-   /config/build - webpack configuration
-   /config/jest - test environment configuration
-   /config/storybook - storybook configuration

In the `scripts` folder, there are various scripts for refactoring, simplifying code writing, generating reports, etc.

---

## CI pipeline and pre commit hooks

The GitHub Actions configuration is located in /.github/workflows. In CI, all types of tests, project and storybook builds, and linting are run.

In pre-commit hooks, the project is checked by linters, with the config in /.husky

---

### Working with data

Interaction with data is handled using Redux Toolkit. Whenever possible, reusable entities should be normalized using EntityAdapter.

Server requests are made using [RTK query](/src/shared/api/rtkApi.ts).

For asynchronously loading reducers (to avoid including them in the main bundle), [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

---

### Working with feature-flags

Feature flags are only allowed to be used via the toggleFeatures helper.
It is passed an object with the options

{
name: the name of the feature flag,
on: the function that will execute when the feature is enabled,
off: the function that will execute when the feature is disabled
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments

1. The name of the removed-feature-flag
2. State (on/off)

---

## Entities

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Features

-   [addCommentForm](/src/features/addCommentForm)
-   [articleEditForm](/src/features/articleEditForm)
-   [articlePageGreeting](/src/features/articlePageGreeting)
-   [articleRating](/src/features/articleRating)
-   [articleRecommendationsList](/src/features/articleRecommendationsList)
-   [ArticleSortSelector](/src/features/ArticleSortSelector)
-   [ArticleTypeTabs](/src/features/ArticleTypeTabs)
-   [ArticleViewSelector](/src/features/ArticleViewSelector)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [avatarDropdown](/src/features/avatarDropdown)
-   [editableProfileCard](/src/features/editableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [notificationButton](/src/features/notificationButton)
-   [ScrollRecovery](/src/features/ScrollRecovery)
-   [scrollToTopButton](/src/features/scrollToTopButton)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
-   [uiDesignSwitcher](/src/features/uiDesignSwitcher)
