import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todo'

export function TodoForm() {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={`What's your plan?`}
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
