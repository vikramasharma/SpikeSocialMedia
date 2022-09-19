import { ProfileModal } from '@app/containers/Modals/ProfileModal/ProfileModal';
import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '../types';



export const selectProfileModal = (state: ApplicationState) => state.profileModal;

export const selectProfileModals = createSelector(
  selectProfileModal,
  (profileModal) => profileModal.isOpen
);

export const selectPostInfo = createSelector(
  selectProfileModal,
  (profileModal) => profileModal.postInfo
);
