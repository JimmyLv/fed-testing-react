import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./TodoForm";

test("should ignore empty input", () => {
  // given
  const addTodo = jest.fn();
  render(<TodoForm addTodo={addTodo} />);
  // when
  userEvent.type(screen.getByPlaceholderText("What's your plan?"), "{enter}");
  // then
  expect(addTodo).not.toBeCalled();
});

test("should allow add todo when not empty input", () => {
  // given
  const addTodo = jest.fn();
  render(<TodoForm addTodo={addTodo} />);
  // when
  userEvent.type(screen.getByPlaceholderText("What's your plan?"), "buy milk!{enter}");
  // then
  expect(addTodo).toBeCalledWith("buy milk!");
});
