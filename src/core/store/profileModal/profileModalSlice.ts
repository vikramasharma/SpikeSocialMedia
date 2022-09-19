import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isOpen: false,
  postInfo: {
    name: '',
    date: '',
    title: '',
    bio: '',
    imgurl: '',
  },

};


const profileSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openProfileModal: (state, {payload}) => {
      state.isOpen = payload;
    },
    closeProfileModal: (state, {payload}) => {
      state.isOpen = payload;
    },
    setPostInfo: (state, {payload}) => {
      state.postInfo = payload;
    },
  },
});

export const { openProfileModal, closeProfileModal, setPostInfo } = profileSlice.actions;
export default profileSlice.reducer;
