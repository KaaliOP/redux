import { configurestore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";
const store = configurestore({
  reducer: {
    custom: customReducer
  }
});
export default store;
