import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";

export const initStore = () =>
  configureStore({
    reducer: combineReducers({
      todo: todoReducer,
    }),
  });

export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
