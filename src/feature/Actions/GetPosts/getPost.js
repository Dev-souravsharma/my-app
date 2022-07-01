import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../../API/Axios/axiosSetup";

export const getPosts = createAsyncThunk("posts", async () => {
  const res = await apiInstance.get("chores/weeklyChoreTotal");
  return res.data.response;
});
