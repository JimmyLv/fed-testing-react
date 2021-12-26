import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "./Todo";

describe("Todo component", () => {
  test("should render new item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: false,
    };
    render(
      <Todo
        todo={todo}
        toggleTodo={jest.fn()}
        removeTodo={jest.fn()}
        index={todo.id}
      />
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  test("should render isCompleted item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: true,
    };
    render(
      <Todo
        todo={todo}
        toggleTodo={jest.fn()}
        removeTodo={jest.fn()}
        index={todo.id}
      />
    );
    expect(screen.getByText("Redo")).toBeInTheDocument();
  });
  test("should toggle item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: true,
    };
    const toggleTodo = jest.fn();
    render(
      <Todo
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={jest.fn()}
        index={todo.id}
      />
    );
    userEvent.click(screen.getByText("Redo"));
    expect(toggleTodo).toHaveBeenCalledTimes(1);
  });
  test("should toggle item when todo not completed", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: false,
    };
    const toggleTodo = jest.fn();
    render(
      <Todo
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={jest.fn()}
        index={todo.id}
      />
    );
    userEvent.click(screen.getByText("Complete"));
    expect(toggleTodo).toHaveBeenCalledTimes(1);
  });
  test("should delete item", () => {
    const todo = {
      id: 1,
      text: "Hello World",
      isCompleted: true,
    };
    const removeTodo = jest.fn()
    render(
      <Todo
        todo={todo}
        toggleTodo={jest.fn()}
        removeTodo={removeTodo}
        index={todo.id}
      />
    );
    userEvent.click(screen.getByText("x"));
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });
});
