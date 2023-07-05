describe("Leaflink Automation", () => {

    it("Leaflink login", () => {
        cy.visit("https://auth-non-production.leaflink.com/u/login?state=hKFo2SBNUTBtMmZLUTJwbEN1VEZzR05HQkVmaG1zWU9WRk5MSqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGtJNXNuWHphdVhjSWp6ZksxUmhHRzUzeEQwMXFBdWF5o2NpZNkga1B3Um1LR2FjeU1JRlVFYlBkdjZmZWlEckNHZ1A4QUs")
        cy.get('#username').type("jnmora@truelogic.io")
        cy.get('#password').type("Amateratsu2626*")
        cy.get('.cf772ffae > .c89f1057d').click()
    })

    it("Hijacking an user", () => {
        cy.visit("https://auth-non-production.leaflink.com/u/login?state=hKFo2SBNUTBtMmZLUTJwbEN1VEZzR05HQkVmaG1zWU9WRk5MSqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGtJNXNuWHphdVhjSWp6ZksxUmhHRzUzeEQwMXFBdWF5o2NpZNkga1B3Um1LR2FjeU1JRlVFYlBkdjZmZWlEckNHZ1A4QUs")
        cy.get('#username').type("jnmora@truelogic.io")
        cy.get('#password').type("Amateratsu2626*")
        cy.wait(1000)
        cy.get('.cf772ffae > .c89f1057d').click()
        cy.wait(1000)
        cy.get('[data-test="button|navToggle"]').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > ._anchor_1o2fz_2422 > span').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > ul > li > a').click()
        cy.wait(1000)
        cy.get('.page-header').should("be.visible")
        cy.get('h1').contains("User Hijack")
        cy.get(':nth-child(1) > .col-md-4 > .form-group').type("cheeba chews")
        cy.wait(1000)
        cy.get('.col-sm-2 > .btn').click()
        cy.wait(1000)
        cy.get(':nth-child(6) > .col-xs-3 > .btn').click()
        cy.wait(1000)
        cy.get('#collapse-company-2678 > .well > :nth-child(14) > .text-center > a > u').click()
    
    })    

})