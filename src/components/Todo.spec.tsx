import { mount } from "@cypress/react";
import App from "../App";
import { Todo } from "./Todo";

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
      mount(<App />, {
        stylesheets: [
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css",
        ],
      });
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
      <Todo
        todo={todo}
        index={todo.id}
        toggleTodo={cy.stub()}
        removeTodo={cy.stub()}
      />
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
      <Todo
        todo={todo}
        index={todo.id}
        toggleTodo={cy.stub()}
        removeTodo={cy.stub()}
      />
    );
    cy.contains(".todo button", "Redo");
  });

  it("should delete an item", () => {
    const todo = {
      id: 1,
      text: "test todo",
      isCompleted: true,
    };
    const removeTodo = cy.stub().as("remove");
    mountWithStyle(
      <Todo
        todo={todo}
        index={todo.id}
        toggleTodo={cy.stub()}
        removeTodo={removeTodo}
      />
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
    const toggleTodo = cy.stub().as("toggle");
    mountWithStyle(
      <Todo
        todo={todo}
        index={todo.id}
        toggleTodo={toggleTodo}
        removeTodo={cy.stub()}
      />
    );
    cy.contains(".todo", "test todo").contains("Complete").click();
    cy.get("@toggle").should("be.calledWith", todo.id);
  });
});
