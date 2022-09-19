import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, onValue } from 'firebase/database';
import axios from 'axios';

import { initFirebase } from '@app/core/network/firebase';
import { postState, ThunkStatus } from '@core/types';



const url = 'https://spike-f246f-default-rtdb.firebaseio.com/posts.json';

/* Firebase */
const db = getDatabase(initFirebase);
const postRef = ref(db, 'posts/');

export const getPosts = createAsyncThunk('', async (name, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;

  } catch (error) {
  }


});




const initialState: postState = {
  sliceMeta: {
    status: ThunkStatus.IDLE,
    error: null,
  },
  posts: {},
  isLoading: true,
};



const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, { payload }) => {
      // console.log(payload);
      state.posts = payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;

    },
  },

});

export const { updatePosts } = postSlice.actions;
export default postSlice.reducer;
