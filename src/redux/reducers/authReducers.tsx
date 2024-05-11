// src/store/reducers/authReducer.ts

// import { createReducer } from '@reduxjs/toolkit';
// import { loginSuccess, loginFailure, logoutSuccess } from '../actions/authActions';
// import { User } from '../../types';

// export interface AuthState {
//   user: User | null;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   error: null,
// };

// const authReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(loginSuccess, (state, action) => {
//       state.user = action.payload;
//       state.error = null;
//     })
//     .addCase(loginFailure, (state, action) => {
//       state.user = null;
//       state.error = "Error Received";
//     })
//     .addCase(logoutSuccess, (state) => {
//       state.user = null;
//       state.error = null;
//     });
// });

// export default authReducer;
