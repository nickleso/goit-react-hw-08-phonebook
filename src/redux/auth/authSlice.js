import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './index';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: auth,
  initialState: authInitialState,

  extraReducers: builder => {
    builder
      .addCase(register.fullfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = token.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fullfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = token.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fullfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => (state.isRefreshing = true))
      .addCase(refreshUser.fullfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => (state.isRefreshing = false));
  },
});

export const authReducer = authSlice.reducer;
