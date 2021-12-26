import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

test("should render todo list", () => {
  render(<App />);

  const todos = screen.getAllByTestId("todo-item");

  expect(todos).toHaveLength(3);
});

test("should add todo", () => {
  render(<App />);

  userEvent.type(
    screen.getByPlaceholderText("What's your plan?"),
    "Buy milk{enter}"
  );

  const todos = screen.getAllByTestId("todo-item");
  expect(todos).toHaveLength(4);
});

test("should remove todo", () => {
  render(<App />);

  userEvent.click(
    within(screen.getByText("Learn about React")).getByTestId("remove-todo")
  );
  expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
});

test("should toggle todo completed", () => {
  render(<App />);

  const firstTodo = within(screen.getByText("Learn about React"));
  userEvent.click(firstTodo.getByText("Complete"));
  expect(firstTodo.getByText("Redo")).toBeInTheDocument();
});
