import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 'null',
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.value = payload;
    },
    logInOut: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

export const { saveUser, logInOut } = authSlice.actions;
export default authSlice.reducer;

