import { mount } from "@cypress/react";
import React from "react";
import { Provider } from "react-redux";
import App from "../App";
import { initStore } from "../store/store";
import { Todo } from "./Todo";

const ReduxWrapper: React.FC = ({ children }) => (
  <Provider store={initStore()}>{children}</Provider>
);

export function mountWithStyle(comp: React.ReactElement) {
  return mount(comp, {
    stylesheets: [
      "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css",
    ],
  });
}

describe("Todo App", () => {
  context("App", () => {
    beforeEach(() => {
      mount(
        <ReduxWrapper>
          <App />
        </ReduxWrapper>,
        {
          stylesheets: [
            "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css",
          ],
        }
      );
    });
    it("should works", () => {
      cy.get(".todo").should("have.length", 3);
      cy.get("input.input").type("Test with Cypress{enter}");
      cy.get(".todo")
        .should("have.length", 4)
        .contains("Meet friend for lunch")
        .find('[data-testid="remove-todo"]')
        .click();
      cy.get(".todo").should("have.length", 3);
    });
  });
  it("should renders new item", () => {
    const todo = {
      id: 1,
      text: "test todo",
      isCompleted: false,
    };
    mountWithStyle(
      <ReduxWrapper>
        <Todo todo={todo} index={todo.id} />
      </ReduxWrapper>
    );
    cy.contains(".todo button", "Complete");
  });

  it("should render completed item", () => {
    const todo = {
      id: 1,
      text: "test todo",
      isCompleted: true,
    };
    mountWithStyle(
      <ReduxWrapper>
        <Todo todo={todo} index={todo.id} />
      </ReduxWrapper>
    );
    cy.contains(".todo button", "Redo");
  });

  it("should delete an item", () => {
    const todo = {
      id: 1,
      text: "test todo",
      isCompleted: true,
    };
    mountWithStyle(
      <ReduxWrapper>
        <Todo todo={todo} index={todo.id} />
      </ReduxWrapper>
    );
    cy.contains(".todo", "test todo")
      .find('[data-testid="remove-todo"]')
      .click();
    cy.get("@remove").should("be.calledWith", todo.id);
  });

  it("should toggle todo", () => {
    const todo = {
      id: 1,
      text: "test todo",
      isCompleted: false,
    };
    mountWithStyle(
      <ReduxWrapper>
        <Todo todo={todo} index={todo.id} />
      </ReduxWrapper>
    );
    cy.contains(".todo", "test todo").contains("Complete").click();
    cy.get("@toggle").should("be.calledWith", todo.id);
  });
});
