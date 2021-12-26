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
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => toggleTodo(index)}>{toggleText}</button>
        <button data-cy="remove" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
}
