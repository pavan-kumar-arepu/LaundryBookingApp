// // Authentiation Services Module

// // src/services/authService.ts

// import auth from '@react-native-firebase/auth';
// import { Dispatch } from 'redux';
// import React, { useState } from 'react';
// import { User } from '../types';

// import { loginSuccess, loginFailure, logoutSuccess } from '../redux/actions/authActions';

// // export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
// //   try {
// //     const userCredential = await auth().signInWithEmailAndPassword(email, password);
// //     console.log("userCredentails received");
// //     // dispatch(loginSuccess(userCredential.user));
// //   } catch (error) {
// //     // dispatch(loginFailure(error.message));
// //     console.log("Error Received")
// //   }
// // };


// export const login = (email: string, password: string) => async (dispatch: (arg0: { payload: User; type: string; }) => void) => {
//   try {
//     const userCredentails = await auth().signInWithEmailAndPassword(email,password);
//     console.log(userCredentails.user);    
    
// // Create a user object using data from userCredentials
// const user: User = {
//   name: userCredentails.user.displayName || '',
//   email: userCredentails.user.email || ''
// };

// dispatch(loginSuccess(user)); // Dispatch login success action with user object as payload
//   } catch (error) {
//     console.error('Error logging out:', error);
//   }
// };


// export const logout = () => async (dispatch: Dispatch) => {
//   try {
//     await auth().signOut();
//     dispatch(logoutSuccess());
//   } catch (error) {
//     console.error('Error logging out:', error);
//   }
// };
