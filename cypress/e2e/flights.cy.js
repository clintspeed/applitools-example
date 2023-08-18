/// <reference types="cypress" />

describe("Flight Results", () => {
  // This method performs setup before each test.
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Flights Search",
      testName: Cypress.currentTest.title,
      matchLevel: "Layout",
    });
  });

  it("displays flight search results", () => {
    // Load the login page.
    cy.visit(
      "https://secure.flightcentre.com.au/search/syd/bne/20231121/20231128/1/0/0/ECONOMY"
    );
    cy.get("div.test-tripGroupTitle").eq(0).should("be.visible");

    cy.eyesCheckWindow({
      tag: "Flights Search Results",
      target: "window",
      fully: false,
      layoutBreakpoints: [412, 1024, 1920],
    });

    cy.get("div.test-tripGroupTitle")
      .eq(0)
      .within(() => {
        cy.get("button.test-button").click();
      });

    cy.get("div.test-accordionItem0").should("be.visible");
    cy.findAllByRole("button", { name: /Select/i }).should("have.length", "2");

    cy.eyesCheckWindow({
      tag: "Flights Search Single Result",
      target: "region",
      fully: false,
      selector: "div.test-accordionItem0",
      layoutBreakpoints: [412, 1024, 1920],
    });
  });
  // This method performs cleanup after each test.
  afterEach(() => {
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose();
  });
});
