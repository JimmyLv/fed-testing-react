import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Learn about React",
    isCompleted: false,
  },
  {
    text: "Meet friend for lunch",
    isCompleted: false,
  },
  {
    text: "Build really cool todo app",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push({ text: action.payload, isCompleted: false });
    },
    toggleTodo(state, action) {
      // immer
      const todoToFlip = state[action.payload];
      if (todoToFlip) {
        todoToFlip.isCompleted = !todoToFlip.isCompleted;
      }
    },
    deleteTodo(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { deleteTodo, toggleTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
