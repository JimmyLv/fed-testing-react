import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

test("should show full name when type", async () => {
  // given
  render(<App />);
  const appendText = " Welcome!";
  // when
  const input = await screen.findByPlaceholderText("Type your name");
  userEvent.type(input, appendText);
  // then
  expect(screen.getByText(/welcom/i).textContent).toMatchInlineSnapshot(
    `"Oskari Wirtanen Welcome!"`
  );
});

test("should display name from api directly", async () => {
  // given
  render(<App />);
  // when
  const text = await screen.findByText(/Oskari Wirtanen/gi);
  // then
  expect(text).toBeInTheDocument();
});
