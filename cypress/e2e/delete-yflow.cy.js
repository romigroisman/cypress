//se coloca el id de un flujo creado

it('DELETE yflow via API', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://yflow-qa.yoizen.com/api/flows/false?id=1517',
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8veWZsb3cueW9pemVuLmNvbSIsIm5hbWUiOiJyZ3JvaXNtYW4iLCJ1aWQiOjExMiwiY2lkIjoxLCJjbmFtZSI6IkRlZmF1bHQiLCJzdXBlciI6ZmFsc2UsImFkbWluIjp0cnVlLCJlZGl0Ijp0cnVlLCJwdWJsaXNoIjp0cnVlLCJzZWVTdGF0aXN0aWNzIjp0cnVlLCJjYW5BY2Nlc3NZU21hcnQiOnRydWUsImNhblZhbGlkYXRlUGFzc3dvcmRzIjp0cnVlLCJsYW5nIjpudWxsLCJpYXQiOjE3MDYwMzUwOTR9.fmiGcYeplgPwTWvkdUZ1ZeMlWLoO4VtxhiYEEEgZULs',
        }
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Flow deleted');
    });
});

