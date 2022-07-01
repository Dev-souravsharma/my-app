import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Reducer/CounterSlice";
import GetPostsReducer from "./Reducer/GetPosts";
import LoginReducer from "./Reducer/LoginSlice";
const store = configureStore({
  reducer: {
    counter: CounterReducer,
    Posts: GetPostsReducer,
    Auth: LoginReducer,
  },
});

export default store;
