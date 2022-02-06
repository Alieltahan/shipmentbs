import reducer from './RootReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer,
});
