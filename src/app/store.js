import photoReducer from "features/Photo/photoSlice";
import userReducer from "./userSlice";
const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
  photos: photoReducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
