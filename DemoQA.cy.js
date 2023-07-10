describe("saucedemoE2E", () => {

    it("Demora bad", () => {
        cy.visit("https://duckduckgo.com/")
        cy.get('.legacy-homepage_logo__DLUJg').should("exist")
        cy.get('#searchbox_input').type("https://www.domainmarket.com/buynow/demora.com")
        cy.wait(1000)
        cy.get('.searchbox_searchButton__F5Bwq').click()
        cy.get('#duckbar').should("exist")
        cy.get(':nth-child(2) > [data-testid="result"] > .ikg2IXiCD14iVX7AdZo1 > .LnpumSThxEWMIsDdAT17 > [data-testid="result-title-a"] > .EKtkFWMYpwzMKOYr0GYm').click()
        
    })

    it("DemoQAType", () => {
        cy.visit("https://demoqa.com/")
        cy.get('header > a > img').should("exist")
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').contains("Elements")
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        cy.get('#userName').type("Jose Navia")
        cy.get('#userEmail').type("navia_1031@hotmail.com")
        cy.get('#currentAddress').type("12345")
        cy.get('#permanentAddress').type("12345")
        cy.get('#submit').click()
        cy.wait(1000)
        cy.get('.border').should('contain.text', 'Name:Jose Navia')
            .and('contain.text', 'Email:navia_1031@hotmail.com')
            .and('contain.text', 'Current Address :12345')
            .and('contain.text', 'Permananet Address :12345')

    })

    it.only("DemoQACheckbox", () => {
        cy.visit("https://demoqa.com/")
        cy.get('header > a > img').should("exist")
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').contains("Elements")
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        cy.get('.rct-title').click()
        cy.get('#result').should("exist")

    })


})