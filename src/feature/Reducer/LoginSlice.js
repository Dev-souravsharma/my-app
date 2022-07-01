import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../Actions/Login/login";

const initialState = {
  loading: false,
  data: [],
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default loginSlice.reducer;
