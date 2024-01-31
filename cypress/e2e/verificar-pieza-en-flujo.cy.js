Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  describe("verificar pieza en flujo", () => {
    before('se loguea en yflow',() => {
         cy.visit('https://yflow-qa.yoizen.com/')
         cy.get(':nth-child(1) > .form-control').type("rgroisman")
         cy.get(':nth-child(2) > .form-control').type("32!EWQdsa")
         cy.get('.btn').click()
         cy.wait(5000)
    })

    after('DELETE yflow via API', () => {
        let flowId;
  
        // Obtener la URL actual
        cy.url().then((url) => {
          // Dividir la URL por el carácter "/"
          const urlParts = url.split('/');
          // Obtener el último elemento de la matriz que debería ser el ID
          flowId = urlParts[urlParts.length - 2];
          // Imprimir el ID en la consola para verificar
          cy.log(`El ID del flujo es: ${flowId}`);
        
          // Realizar la solicitud después de obtener el ID
          cy.request({
            method: 'DELETE',
            url: `https://yflow-qa.yoizen.com/api/flows/false?id=${flowId}`,
            headers: {
              'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8veWZsb3cueW9pemVuLmNvbSIsIm5hbWUiOiJyZ3JvaXNtYW4iLCJ1aWQiOjExMiwiY2lkIjoxLCJjbmFtZSI6IkRlZmF1bHQiLCJzdXBlciI6ZmFsc2UsImFkbWluIjp0cnVlLCJlZGl0Ijp0cnVlLCJwdWJsaXNoIjp0cnVlLCJzZWVTdGF0aXN0aWNzIjp0cnVlLCJjYW5BY2Nlc3NZU21hcnQiOnRydWUsImNhblZhbGlkYXRlUGFzc3dvcmRzIjp0cnVlLCJsYW5nIjpudWxsLCJpYXQiOjE3MDYwMzUwOTR9.fmiGcYeplgPwTWvkdUZ1ZeMlWLoO4VtxhiYEEEgZULs',
            }
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('Flow deleted');
          });
        });
        
  
    })


    it('creación de flujo y verificación de pieza',() => {
        //se crea un flujo
          cy.get('.fal').click()
          cy.get('.input').type('verificar pieza messenger') //nombre del flujo creado
          cy.get('select').first().select('1: 2048') //selecciona tipo fb messenger
          cy.get('.action-button-default').click()
          cy.wait(4000)
          cy.xpath("//ui-switch[@color='#45c195']").invoke('click', { force: true });//click en switch de piezas avanzadas
          cy.xpath("//app-button-menu-pieces[contains(string(),'Actualizar caso')]").should('exist');//ejemplo de pieza existente
          cy.xpath("//app-button-menu-pieces[contains(string(),'Mensaje interactivo de lista')]").should('not.exist')//pieza no existente
              
      });
})