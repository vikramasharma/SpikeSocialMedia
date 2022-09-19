import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '../types';



export const selectPostModal = (state: ApplicationState) => state.postModal;

export const selectPostModals = createSelector(
  selectPostModal,
  (postModal) => postModal.isOpen
);
