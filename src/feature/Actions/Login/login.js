import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../../API/Axios/axiosSetup";

export const loginAction = createAsyncThunk("login", async (req) => {
  const res = await apiInstance.post("/users/signIn", req);
  localStorage.setItem("accessToken", res.data.response.token.accessToken);
  return res.data;
});
