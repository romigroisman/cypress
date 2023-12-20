Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

describe("El agente Poo Chie cambia a estado auxiliar y se verifica en el reporte de tiempo real del agente", () => {
  
      after('Se desconecta al agente Poo Chie desde la web del supervisor',() => {
        //Falta acomodarlo para que lo haga con más agentes logueados, usar within
        cy.visit('https://qa.ysocial.net/Test/Reports/RTAgents.aspx')
        cy.wait(3000)
        cy.get('[rel="disconnect"] > .fa').click()
        cy.xpath("//label[@class='uiButton uiButtonLarge uiButtonConfirm']/input[@type='button']").click()
        cy.wait(3000)
        cy.get('#cboxLoadedContent > .seccion > .contents > .message > table > tbody > tr > .text').should('include.text','Se desconectó el agente Poo Chie')

      })

      it('El agente Poo Chie se loguea y cambia a estado auxiliar Almuerzo',() => {
        cy.visit('https://qa.ysocial.net/test/agent/#/login')
        cy.get(':nth-child(1) > .form-control').type('poochie')
        cy.get(':nth-child(2) > .form-control').type('32!EWQdsa')
        cy.get('.btn').click()
        cy.wait(8000)
        cy.get('.relative.dropdown > .dropdown-toggle > .button').click()
        cy.contains('Almuerzo').click()//se pone en estado auxiliar almuerzo
        cy.wait(4000)
      
        //cerrar sesion desde agente

        // cy.get('.user-image').click()
        // cy.get('[ng-hide="navigation.removeLogoutButton()"] > .fa').click()
        // cy.get('.btn-action').click()
      })

      it('La supervisora rgroisman se loguea y verifica el estado auxiliar de Poo Chie',() => {
        cy.visit('https://qa.ysocial.net/Test/Reports/RTAgents.aspx')
        cy.get('#ctl00_contentplaceholderContenido_textboxUser').type('rgroisman')
        cy.get('#ctl00_contentplaceholderContenido_textboxPassword').type('32!EWQdsa')
        cy.get('#sumbitLogin').click()
        cy.wait(3000)
        cy.contains('Poo Chie')
        .parent('tr')
        .within(() => {
          cy.xpath("//td[@style='white-space:nowrap;text-align:center']/a/span[@data-original-title='Ver más información de la actividad del agente']").click()

        //cy.xpath("//td[@style='white-space:nowrap;text-align:center']/a/span[@data-original-title='Ver más información de la actividad del agente']")
        // cy.xpath("//td[@style='font-weight:bold;white-space:normal']/a[contains(string(),'Poo Chie')]")
        //   .within(() => {
            
        //   })
        
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('include.text','[Almuerzo]')// es el texto en español, se rompió la traduccion
        cy.get('#ui-id-2').click()//solapa tiempos
        //cy.get('[class=highcharts-legend-item highcharts-pie-series highcharts-color-2 highcharts-legend-item-hidden]').should('have.text','Almuerzo')
        cy.wait(3000)
        cy.xpath("//div[@id='divTimesDayChart']").should('include.text','Almuerzo')
    
      })
   
    })
  })
 //ejemplo de xpath de poochie en reporte de agentes de tiempo real: $x("//td[@style='font-weight:bold;white-space:normal']/a[contains(string(),'Poo Chie')]")
  