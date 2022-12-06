import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const randomComputerName = Math.random().toString(36).substring(2,7);

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});


Given('I visit the Computer Database page', () => {
  cy.visit('/');
});

When('I click add a new computer button', () => {
  cy.get('#add').click();
});

When('I fill in all the information needed for a new computer', () => {
  cy.get('#name')
    .type(randomComputerName)
    .get('#introduced')
    .type('1998-02-01')
    .get('#discontinued')
    .type('2021-02-10')
    .get('#company')
    .select('Micro Instrumentation and Telemetry Systems');
});

When('I click Create this computer', () => {
  cy.get('.btn.primary').click();
});

Then('Computer should be registered', () => {
  cy.contains('.alert-message.warning', randomComputerName).should('be.visible');
});

Then('Computer should be in the list', () => {
  cy.get('#searchbox').type(randomComputerName);
  cy.get('.btn.primary').click();
  cy.get('.computers.zebra-striped').contains('td', randomComputerName).should("be.visible");
});

When('I search {string} in the listed computer', (keywordOk: string) => {
  cy.get('#searchbox').type(keywordOk);
  cy.get('.btn.primary').click();
});

Then('I will see the list of ASCI computers', () => {
  cy.get('.computers.zebra-striped').contains('td', 'ASCI').should("be.visible");
});