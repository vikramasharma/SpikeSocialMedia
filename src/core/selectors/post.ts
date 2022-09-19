import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '../types';



export const selectPost = (state: ApplicationState) => state.post;

export const selectisLoading = createSelector(
  selectPost,
  (post) => post.isLoading
);

export const selectPosts = createSelector(
  selectPost,
  (post) => post.posts
);
