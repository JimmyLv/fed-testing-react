import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { initStore } from "../store/store";

export function renderWithRedux(
  ui: React.ReactElement,
  { store = initStore(), ...renderOptions } = {}
) {
  jest.spyOn(store, "dispatch");

  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  const result = render(ui, { wrapper: Wrapper, ...renderOptions });
  return { ...result, store };
}
