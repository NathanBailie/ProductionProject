## User entity

The "User" entity allows users to

#### Public api

##### Types:

-   `UserRole` - the enum defines the different roles a user can have
-   `User` - the interface defines the structure for user data
-   `UserSchema` - the interface represents the overall user state

##### Reducers and actions:

-   `userReducer` and `userActions` - used for managing user-related state and actions

##### Selectors:

-   `getUserAuthData` - contains information about the user
-   `getUserInitialized` - contains information about whether the user is authenticated
-   `isUserAdmin` - contains information about whether the user is an administrator
-   `isUserManager` - contains information about whether the user is an manager
-   `getUserRoles` - contains information about the user's roles
-   `useJsonSettings` - contains information about the user's JSON settings.

##### Services:

-   `saveJsonSettings` - the service provides the process of saving and updating the user's JSON settings
-   `initAuthData` - initializes the user's authentication data by retrieving the user ID from local storage, fetching the user's details, and saving the interface settings based on the retrieved data.
