import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { deleteTodo, toggleTodo } from "../store/todo";
import { renderWithRedux } from "../test-utils/renderWithRedux";
import { Todo } from "./Todo";

describe("Todo component", () => {
  test("should render new item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: false,
    };
    renderWithRedux(<Todo todo={todo} index={todo.id} />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  test("should render isCompleted item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: true,
    };
    renderWithRedux(<Todo todo={todo} index={todo.id} />);
    expect(screen.getByText("Redo")).toBeInTheDocument();
  });
  test("should toggle item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: true,
    };
    const { store } = renderWithRedux(<Todo todo={todo} index={todo.id} />);

    userEvent.click(screen.getByText("Redo"));

    expect(store.dispatch).toHaveBeenCalledWith(toggleTodo(todo.id));
  });
  test("should toggle item when todo not completed", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: false,
    };
    const { store } = renderWithRedux(<Todo todo={todo} index={todo.id} />);

    userEvent.click(screen.getByText("Complete"));

    expect(store.dispatch).toHaveBeenCalledWith(toggleTodo(todo.id));
  });
  test("should delete item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: true,
    };
    const { store } = renderWithRedux(<Todo todo={todo} index={todo.id} />);

    userEvent.click(screen.getByText("x"));

    expect(store.dispatch).toHaveBeenCalledWith(deleteTodo(todo.id));
  });
});
