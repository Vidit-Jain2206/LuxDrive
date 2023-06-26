import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import mobileMenuReducer from "../Features/MobileMenu/MobileMenuSlice";

// const logger = createLogger();
const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
