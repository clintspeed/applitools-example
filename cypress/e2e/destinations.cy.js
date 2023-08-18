/// <reference types="cypress" />

describe("Destination Pages", () => {
  // This method performs setup before each test.
  beforeEach(() => {
    cy.eyesOpen({
      appName: "FC Holidays",
      testName: Cypress.currentTest.title,
    });
  });

  it("display content", () => {
    // Load the login page.
    cy.visit("https://www.flightcentre.com.au/holidays/au-qld");

    cy.eyesCheckWindow({
      tag: "Main page",
      target: "window",
      fully: false,
      layoutBreakpoints: [412, 1024, 1920],
    });
  });
  it("display airport search", () => {
    // Load the login page.
    cy.visit("https://www.flightcentre.com.au/holidays/au-qld-longreach");
    cy.eyesCheckWindow({
      tag: "Main page",
      target: "window",
      fully: false,
      layoutBreakpoints: [412, 1024, 1920],
    });
  });
  // This method performs cleanup after each test.
  afterEach(() => {
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose();
  });
});
