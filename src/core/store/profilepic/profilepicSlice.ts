import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  url: 'null',
};

const profilepicSlice = createSlice({
  name: 'profilepic',
  initialState,
  reducers: {
    setProfilePicUri: (state, { payload }) => {
      state.url = payload;
    },
  },
});

export const { setProfilePicUri } = profilepicSlice.actions;
export default profilepicSlice.reducer;

