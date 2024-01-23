Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });  

describe("obtener id de un flujo", () => {
    before('se loguea en yflow',() => {
         cy.visit('https://yflow-qa.yoizen.com/')
         cy.get(':nth-child(1) > .form-control').type("rgroisman")
         cy.get(':nth-child(2) > .form-control').type("32!EWQdsa")
         cy.get('.btn').click()
         cy.wait(5000)
    })
    it('extrae id de url', () => {

        let flowId;

        cy.visit('https://yflow-qa.yoizen.com/edit-flow/1512/false');

        // Obtener la URL actual
        cy.url().then((url) => {
        // Dividir la URL por el carácter "/"
        const urlParts = url.split('/');
        // Obtener el último elemento de la matriz que debería ser el ID
        flowId = urlParts[urlParts.length - 2];
        // Imprimir el ID en la consola para verificar
        cy.log(`El ID del flujo es: ${flowId}`);
        });

        // Ahora puedes usar 'flowId' en cualquier lugar de tu prueba donde sea necesario.
    });
});