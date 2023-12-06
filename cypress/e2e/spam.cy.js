Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Entrante messenger", () => {


  before(() => {
    cy.fbFinalUserLogin('rgroisman@yoizen.com','romiyoizen');
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
  })

  // beforeEach(() => {
  //   //si esto no termino de loguear
  //    cy.fbFinalUserLogin('qayzn76@gmail.com','asdQWE!23');


  //    });

  it("sendMensaje", () => {
    for(let i = 0 ; i< 50; i++){
      const input = cy.get('.xmjcpbm > .x1a02dak');
      for (let i = 0; i < 15; i++){
        input.type(Date.now()+'{enter}');
      }
      input.type('dyc{enter}')
      cy.wait(10000)
    }
  });

});
