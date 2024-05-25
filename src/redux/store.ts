// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import referrerReducer from './referrerSlice';

const store = configureStore({
  reducer: {
    referrer: referrerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
