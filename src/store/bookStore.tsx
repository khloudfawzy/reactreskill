// import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from './bookReducer';

// const store = configureStore({
//   reducer: {
//     bookRed: bookReducer,
//   },
  
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
export const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
export type Dispatcher = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>