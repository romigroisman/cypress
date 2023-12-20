Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

describe("aparece el mensaje del usuario en la columna del detallado - estadísticas de la kb", () => {
     /*Precondiciones manuales: El flujo romi gpt cognitiv tiene que estar conectado a Mundorata. 
      Este flujo tiene una pieza que evalua el primer ingreso de texto con las bases de conocimiento.Cada mensaje del usuario va a realizar un salto de bloque según 
      el nivel de confianza con la intención y luego va a invocarse a la kb*/

    before('usuario envia su consulta a la kb y se loguea el supervisor a yflow',() => {
        cy.fbFinalUserLogin('rgroisman@yoizen.com','romiyoizen');
        cy.visit('https://www.facebook.com/messages/t')
        cy.contains("Volver a cargar página").click();
        cy.contains("Mundorata").click();
    
        const input = cy.get('.xmjcpbm > .x1a02dak');
        input.type('hola'+'{enter}');
        cy.wait(8000);
        input.type('q tipo de actividad de ESI se puede planificar para 5to grado?'+'{enter}');
        cy.wait(8000);
        
        
    })

    it('verificar el detallado de estadísticas de la kb',()=> {
        cy.visit('https://yflow-qa.yoizen.com/')
        cy.get(':nth-child(1) > .form-control').type("rgroisman")
        cy.get(':nth-child(2) > .form-control').type("32!EWQdsa")
        cy.get('.btn').click()
        cy.get('.navbar-right > :nth-child(2)').click()

        cy.window().then((newWindow) => {
          // Realiza acciones en la nueva ventana
          newWindow.location.href = 'https://ysmartlinux-testea92.azurewebsites.net/dashboard'; // Cambia la URL de la nueva ventana
          // O realiza otras acciones en la nueva ventana
        });
        cy.wait(8000)

    })
            
          
  })