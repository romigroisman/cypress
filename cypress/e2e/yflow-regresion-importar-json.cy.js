Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  

describe("importación de un json", () => {
    before('se loguea en yflow',() => {
        cy.visit('https://yflow-qa.yoizen.com/')
        cy.get(':nth-child(1) > .form-control').type("rgroisman")
        cy.get(':nth-child(2) > .form-control').type("32!EWQdsa")
        cy.get('.btn').click()
        cy.wait(5000)
    })

    it('importacion de un json de wa en uno de chat',() => {
        cy.get('.fal').click()
        cy.get('.input').type('wa importado')
        cy.get('.select-channel > .select').select('chat')
    })
})