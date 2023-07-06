describe("saucedemoE2E", () => {

    it("E2E Saucedemo", () => {
        cy.visit("https://duckduckgo.com/")
        cy.get('.legacy-homepage_logo__DLUJg').should("exist")
        cy.get('#searchbox_input').type("https://www.domainmarket.com/buynow/demora.com")
        cy.wait(1000)
        cy.get('.searchbox_searchButton__F5Bwq').click()
        cy.get('#duckbar').should("exist")
        cy.get(':nth-child(2) > [data-testid="result"] > .ikg2IXiCD14iVX7AdZo1 > .LnpumSThxEWMIsDdAT17 > [data-testid="result-title-a"] > .EKtkFWMYpwzMKOYr0GYm').click()
        


        
    })

})