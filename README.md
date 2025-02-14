# User Management Application
This is a User Management Application built using React, React Router, and Axios for API interactions. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on a list of users. The user data is fetched from a mock API, and the application uses React's useReducer hook to manage the state of the users.

## Features
* View User List: Display a list of users with their name, email, website, and company.

* Add User: Add a new user to the list.

* Edit User: Edit an existing user's details.

* Delete User: Remove a user from the list.

## Technologies Used
* React: A JavaScript library for building user interfaces.

* React Router: For handling routing within the application.

* Axios: For making HTTP requests to the mock API.

* Bootstrap: For styling the application.

## Project Structure
The project is structured as follows:

* index.js: The entry point of the application.

* App.jsx: The main component that manages the state and routing.

* Userlist.jsx: Displays the list of users and handles the delete operation.

* Userform.jsx: Handles the form for adding and editing users.

* usereducer.js: Contains the reducer function for managing user state.

## Code Overview
1. index.js (Entry Point)
This file is the entry point of the application. It sets up the base URL for Axios and renders the App component.

2. usereducer.js (Reducer Function)
This file contains the reducer function that manages the state of the users based on the action type.

3. App.jsx (Main Component)
The App component is the main entry point of the application. It uses the useReducer hook to manage the state of the users and the useEffect hook to fetch the initial list of users from the API.

4. Userlist.jsx (User List Component)
This component displays the list of users in a table format. It also provides buttons to edit or delete a user.

5. Userform.jsx (User Form Component)
This component handles the form for adding and editing users. It uses the useLocation and useNavigate hooks from React Router to manage the form state and navigation.

## Conclusion
This application demonstrates how to build a simple CRUD application using React, React Router, and Axios. It also shows how to manage state using the useReducer hook and how to handle routing and form submissions in a React application.

