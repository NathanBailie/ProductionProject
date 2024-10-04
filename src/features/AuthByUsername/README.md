## AuthByUsername feature

The "AuthByUsername" feature provides an interface in the form of a modal window with input fields, an error message, and a button for user authentication

#### Public api

##### Components:

-   `LoginModal` - the component is a modal window for user authentication that displays a login form and a loading indicator during the asynchronous loading of the form

##### Types:

-   `LoginSchema` - interface defines the structure for user login data, including username, password, an error message and a boolean isLoading flag to indicate the loading state of the login process
