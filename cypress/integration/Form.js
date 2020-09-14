const { createYield } = require("typescript")

describe("testing form", () =>{ 
    it("Form function working properly", () => {
        cy.visit("/PizzaForm");

        cy.get(`[data-cy ="name"]`)
        .type("bob")
        .should("have.value", "bob");

        cy.get(`[data-cy = "size"]`)
        .select("Large")
        .should("have.value", "Large");

        cy.get(`[data-cy = "pepperoni"]`)
        .click()
        .should("be.checked");

        cy.get(`[data-cy = "pineapple"]`)
        .click()
        .should("be.checked");

        cy.get(`[data-cy = "bacon"]`)
        .click()
        .should("be.checked");

        cy.get(`[data-cy = "chicken"]`)
        .click()
        .should("be.checked");

        cy.get(`[data-cy ="specialInstructions"]`)
        .type("test")
        .should("have.value", "test");

        cy.get("button")
        .click()
    })
})