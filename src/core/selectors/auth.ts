import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '../types';



export const selectAuth = (state: ApplicationState) => state.auth;

export const selectAuths = createSelector(
  selectAuth,
  (auth) => auth.value
);
export const selectLogIn = createSelector(
  selectAuth,
  (auth) => auth.loggedIn

);
