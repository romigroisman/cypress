Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

describe("dejar un comentario en una version de yflow", () => {
    beforeEach(() => {
        cy.visit('https://yflow-qa.yoizen.com/');
        cy.get(':nth-child(1) > .form-control').type('rgroisman')
        cy.get(':nth-child(2) > .form-control').type('32!EWQdsa')
        cy.get('.btn').click()
        cy.wait(6000)
    })
    
    it("dejar un comentario en yflow",() => {
      cy.contains(new RegExp(/\bromi gpt$\b/)).click();
      cy.get(':nth-child(1) > .group-container > .data-container > .panel-collapse > .ignore-dragula-drag').click();
      cy.get('.navbar-right > :nth-child(2)').contains('Guardar').click();
      cy.get('.contents > .ng-pristine').type('comentario de prueba 1');
      cy.get('.action-button-wide').click();
      cy.contains('Historial').click();
      cy.contains(new RegExp(/\bcomentario de prueba 1$\b/));
            
    })

    //   it("Base de conocimiento Esi", () => {
  
    //     const input = cy.get('.xmjcpbm > .x1a02dak');
    //     input.type('hola'+'{enter}');
    //     cy.wait(6000);
    //     input.type('Qué es la ESI?'+'{enter}');
    //     cy.wait(8000);
    //   })

  })