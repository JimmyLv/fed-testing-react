import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { addTodo } from "../store/todo";
import { renderWithRedux } from "../test-utils/renderWithRedux";
import { TodoForm } from "./TodoForm";

test("should ignore empty input", () => {
  // given
  const { store } = renderWithRedux(<TodoForm />);
  jest.spyOn(store, "dispatch");
  // when
  userEvent.type(screen.getByPlaceholderText("What's your plan?"), "{enter}");
  // then
  expect(store.dispatch).not.toBeCalled();
});

test("should allow add todo when not empty input", () => {
  // given
  const { store } = renderWithRedux(<TodoForm />);
  jest.spyOn(store, "dispatch");
  // when
  userEvent.type(
    screen.getByPlaceholderText("What's your plan?"),
    "buy milk!{enter}"
  );
  // then
  expect(store.dispatch).toHaveBeenCalledWith(addTodo("buy milk!"));
});
