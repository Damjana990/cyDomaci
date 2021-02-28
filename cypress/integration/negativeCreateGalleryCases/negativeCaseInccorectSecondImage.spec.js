const locators = require("../../fixtures/locators.json")


describe ('Create Gallery test', () => {

    before (() => {
        cy.visit ('/')
        cy.get("a[href='/login']").click()
    })
        it ('Login', () => {
        cy.get(locators.login.email).type('test1234end@test.com')
        cy.get(locators.login.password).type('12345678')
        cy.get(locators.login.submit).click()
    })
        it ('Create new gallery', () => {
        cy.get("a[href='/create']").click()
    })

    it ('Form inccorect second pictures extension', () => {
        cy.get(locators.create_gallery.title).type('Pictures')
        cy.get(locators.create_gallery.description).type('Desc')
        cy.get(locators.create_gallery.image).type('https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg')
        cy.get(locators.create_gallery.add_button).click()
        cy.get(locators.create_gallery.image_second).type('https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.pg')
        cy.get(locators.create_gallery.submit_butt).click()
    })
})  
