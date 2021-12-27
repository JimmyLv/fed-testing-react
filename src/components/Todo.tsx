import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/todo";
import { TodoType } from "../types";

export function Todo({ todo, index }: { todo: TodoType; index: number }) {
  const dispatch = useDispatch();

  const toggleText = todo.isCompleted ? "Redo" : "Complete";
  return (
    <div
      className="todo"
      data-testid="todo-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => dispatch(toggleTodo(index))}>
          {toggleText}
        </button>
        <button
          data-cy="remove"
          data-testid="remove-todo"
          onClick={() => dispatch(deleteTodo(index))}
        >
          x
        </button>
      </div>
    </div>
  );
}
