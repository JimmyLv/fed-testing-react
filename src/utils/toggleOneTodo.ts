import { TodoType } from "../types";

export const toggleOneTodo = (todos: TodoType[], index: number) => {
  const newTodos = [...todos];
  const todoToFlip = newTodos[index];
  if (todoToFlip) {
    todoToFlip.isCompleted = !todoToFlip.isCompleted;
  }
  return newTodos;
};
