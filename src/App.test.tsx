import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

test("should show full name when type", () => {
  // given
  render(<App />);
  const name = "John Doe"
  // when
  userEvent.type(screen.getByPlaceholderText("Type your name"), name);
  // then
  expect(screen.getByText(name)).toBeInTheDocument();
});
