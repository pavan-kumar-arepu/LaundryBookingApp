// Importing the createSlice function from the Redux Toolkit
/* 
1. Redux follows a unidirectional data flow pattern where state changes are initiated by dispatching actions
2. By dispatching actions, you trigger reducers to update the state in the Redux store. 
Reducers are pure functions that take the current state and an action as arguments and return the next state. 
Redux manages these state updates in a predictable and centralized manner
*/
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const {logIn, resetToInitialState} = User.actions;
export default User.reducer;
