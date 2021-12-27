import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { RootState } from "./store/store";

function App() {
  const todos = useSelector((state: RootState) => state.todo);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
