## Article entity

The "Article" entity allows users to browse and select articles for viewing. Its main functions include displaying detailed information about individual articles, viewing and rating them, as well as viewing and adding comments.

#### Public api

##### Components:

-   `ArticleDetails` - сomponent with article information

-   `ArticleList` - сomponent with a list of articles

-   `ArticleViewSelector` - сomponent for toggling the display of the article list (grid, list)

-   `ArticleSortSelector` - сomponent for selecting the sorting of the article list

-   `ArticleTypeTabs` - сomponent for selecting the article type

##### Types:

-   `Article` - еype that describes an article

##### Selectors:

-   `getArticleDetailsData` - selector for retrieving information about the currently open article
