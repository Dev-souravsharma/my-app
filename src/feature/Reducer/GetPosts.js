import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../Actions/GetPosts/getPost";

const initialState = {
  loading: false,
  data: [],
};
const getPostsSlice = createSlice({
  name: "getPosts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default getPostsSlice.reducer;
