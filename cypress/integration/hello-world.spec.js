context('Hello world', ()=> {

    beforeEach(()=>{
        cy.visit('http://localhost:8080');
    });

    it('check is welcome to vue is present', ()=>{
        cy.screenshot('helloworld');
        cy.get('.hello').children().contains('Welcome to Your Vue.js App').screenshot('welcome');
     });
});