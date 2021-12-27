import { store } from "./store";
import { addTodo, deleteTodo, toggleTodo } from "./todo";

test("should add, complete, delete todo", () => {
  let todos = store.getState().todo;
  expect(todos).toHaveLength(3);

  // should add todo
  store.dispatch(addTodo("new todo"));
  todos = store.getState().todo;
  expect(todos).toHaveLength(4);

  // should complete todo
  store.dispatch(toggleTodo(0));
  let firstTodo = store.getState().todo[0];
  expect(firstTodo.isCompleted).toEqual(true);

  // should delete todo
  store.dispatch(deleteTodo(2));
  todos = store.getState().todo;
  expect(todos).toMatchInlineSnapshot(`
    Array [
      Object {
        "isCompleted": true,
        "text": "Learn about React",
      },
      Object {
        "isCompleted": false,
        "text": "Meet friend for lunch",
      },
      Object {
        "isCompleted": false,
        "text": "new todo",
      },
    ]
  `);
});
