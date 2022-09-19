import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '../types';



export const selectProfilepic = (state: ApplicationState) => state.profilepic;

export const selectProfilUrl = createSelector(
  selectProfilepic,
  (profilepic) => profilepic.url
);
