import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";
import { renderWithRedux } from "./test-utils/renderWithRedux";

test("should render todo list", () => {
  renderWithRedux(<App />);

  const todos = screen.getAllByTestId("todo-item");

  expect(todos).toHaveLength(3);
});

test("should add todo", () => {
  renderWithRedux(<App />);

  userEvent.type(
    screen.getByPlaceholderText("What's your plan?"),
    "Buy milk{enter}"
  );

  const todos = screen.getAllByTestId("todo-item");
  expect(todos).toHaveLength(4);
});

test("should remove todo", () => {
  renderWithRedux(<App />);

  userEvent.click(
    within(screen.getByText("Learn about React")).getByTestId("remove-todo")
  );
  expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
});

test("should toggle todo completed", () => {
  renderWithRedux(<App />);

  const firstTodo = within(screen.getByText("Learn about React"));
  userEvent.click(firstTodo.getByText("Complete"));
  expect(firstTodo.getByText("Redo")).toBeInTheDocument();
});
