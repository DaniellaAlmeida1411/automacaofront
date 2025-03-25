describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('https://www.nubank.com.br/nu/conta')
        cy.wait(3000)
        cy.get('#cpf').type('52265580155')
        cy.get('.chakra-button > .chakra-stack').click()
        cy.get('#name').type('Daniella Almeida')
        cy.wait(3000)
        cy.get('#phone').type('11 973394198')
        cy.get('#email').type('daniellaalmeida@yahoo.com')
        cy.get('#emailConfirmation').type('daniellaalmeida@yahoo.com')
        cy.get(':nth-child(3) > .css-13h41gv > .css-l9nssm').click()
        cy.get('.chakra-checkbox__control').click()
        cy.get('.css-15rwwo > .chakra-button').click()
    });
    
});