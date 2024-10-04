## ScrollRecovery feature

The "ScrollRecovery" allows to remember the scroll position when viewing the list of articles, and when returning from viewing a specific article back to the list, the scroll position is restored.

#### Public api

##### Reducers and actions:

-   `scrollRecoveryReducer` - a reducer that manages the scroll position recovery state in the application
-   `scrollRecoveryActions` - an action provided by the slice that is used to update the scroll state

##### Selectors:

-   `getScrollRecoveryScrollByPath` - selector that retrieves the scroll position for a given path

##### Types:

-   `ScrollRecoverySchema` - This is an interface that describes the state structure for remembering the scroll position in the application
