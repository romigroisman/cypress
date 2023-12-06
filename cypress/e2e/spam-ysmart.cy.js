Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("evaluar cognitividad-pieza base de conocimiento", () => {
 /*Precondiciones manuales: El flujo romi gpt cognitiv tiene que estar conectado a Mundorata. 
 Este flujo tiene una pieza que evalua el primer ingreso de texto con las bases de conocimiento.
 Estos casos se pueden usar para generar estadísticas de la kb.Cada caso invoca una vez a una categoría diferente. 
 Se podría hacer en loop para generar más métricas*/

  beforeEach(() => {
    cy.fbFinalUserLogin('rgroisman@yoizen.com','romiyoizen');
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Mundorata").click();
  })

    it("Base de conocimiento Esi", () => {
  
        const input = cy.get('.xmjcpbm > .x1a02dak');
        input.type('hola'+'{enter}');
        cy.wait(6000);
        input.type('Qué es la ESI?'+'{enter}');
        cy.wait(8000);
      })
  
    it("Base de conocimiento Procrear", () => {
  
        const input = cy.get('.xmjcpbm > .x1a02dak');
        input.type('hola'+'{enter}');
        cy.wait(6000);
        input.type('Qué es procrear?'+'{enter}');
        cy.wait(8000);
    })

    it("Base de conocimiento Pokemon", () => {
  
        const input = cy.get('.xmjcpbm > .x1a02dak');
        input.type('hola'+'{enter}');
        cy.wait(6000);
        input.type('Qué es pokemon?'+'{enter}');
        cy.wait(8000);
    })

    it("Base de conocimiento Previaje", () => {
  
        const input = cy.get('.xmjcpbm > .x1a02dak');
        input.type('hola'+'{enter}');
        cy.wait(6000);
        input.type('Qué es previaje?'+'{enter}');
        cy.wait(8000);
    })
  
    
    it("Redis not exist - Base de conocimiento Cuentas de mail- Mensaje:quiero consultar las cuentas de mail de prueba", () => {
  
      const input = cy.get('.xmjcpbm > .x1a02dak');
      input.type('hola'+'{enter}');
      cy.wait(6000);
      input.type('quiero consultar las cuentas de mail'+'{enter}');
      cy.wait(6000);
      input.type('quiero consultar las cuentas de mail de prueba'+'{enter}');
      cy.wait(8000);
      input.type('dyc'+'{enter}');


    })
  });



  
  // beforeEach(() => {
  //   //si esto no termino de loguear
  //    cy.fbFinalUserLogin('qayzn76@gmail.com','asdQWE!23');


  //    });

  // it("Base de conocimiento Esi", () => {
  //   for(let i = 0 ; i< 3; i++){
  //     const input = cy.get('.xmjcpbm > .x1a02dak');
  //     for (let i = 0; i < 3; i++){
  //       input.type('Qué es la ESI?'+'{enter}');
  //     }
  //     cy.wait(10000)
  //   }

