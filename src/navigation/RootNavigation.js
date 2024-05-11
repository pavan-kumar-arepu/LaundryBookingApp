// src/navigation/AppNavigator.js

import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';

const RootNavigation = () => {
  // TODO: Replace 'false' with actual user authentication check
  const user = useSelector(state => state.user); // Assuming you're using Redux for state management

  // Check if the user is authenticated
  const isAuthenticated = !!user; // Modify this condition based on your authentication logic

  return  <NonAuthenticated />;
};

export default RootNavigation;
