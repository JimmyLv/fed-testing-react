import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { initStore } from "../store/store";

export function renderWithRedux(
  ui: React.ReactElement,
  { store = initStore(), ...renderOptions } = {}
) {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
