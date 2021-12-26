import React from "react";
import { TodoType } from "../types";

export function Todo({
  todo,
  index,
  toggleTodo,
  removeTodo,
}: {
  todo: TodoType;
  index: number;
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}) {
  const toggleText = todo.isCompleted ? "Redo" : "Complete";
  return (
    <div
      className="todo"
      data-testid="todo-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => toggleTodo(index)}>{toggleText}</button>
        <button data-cy="remove" data-testid="remove-todo" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
}
