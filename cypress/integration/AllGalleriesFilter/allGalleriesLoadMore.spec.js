const locators = require("../../fixtures/locators.json")

describe ('Create Gallery test', () => {

    before (() => {
        cy.visit ('/')
    })

    it ('Load 10 galleries more', () => {
        cy.get(locators.all_galleries_filter.all_filter).type('Pi')
        cy.get(locators.all_galleries_filter.filter_button).click()
        cy.get(locators.all_galleries_filter.load_more).click()
    })
})