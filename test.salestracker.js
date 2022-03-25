it('should open Salestracker', () => {
    cy.visit('http://serwer1419259.home.pl/tester/index.php/site/form/52')
    //Imię
    cy.get('#id_1_1').type('Test')
    //Nazwisko
    cy.get('#id_1_2').type('Testowy')
    //Płeć
    cy.get('input[type="radio"]').check('rcaid_2')
    //PESEL
    cy.get('#id_1_4').type('24242425245')
    //NIP
    cy.get('#id_1_70').type('2222225589')
    //Wykształcenie
    cy.get('input[type="radio"]').check('rcaid_8')
    //Skan dyplomu
    cy.get('input[type=file]').attachFile("Plik.png")
    //NPWZ
    cy.get('#id_1_6').type('5757558')

    cy.get('input[type="radio"]').check('rcaid_10')

    cy.get('input[type="radio"]').check('rcaid_12')

    cy.get('input[type="radio"]').check('rcaid_14')

    cy.get('#id_2_30').type('Testowo')

    //Ulica
    cy.get('#id_2_12').type('Testowa')
    //Nr budynku
    cy.get('#id_2_13').type('3')
    //Nr lokalu
    cy.get('#id_2_14').type('4')
    //Miejscowość
    cy.get('#id_2_15').type('Testowo')
    //Kod pocztowy
    cy.get('#id_2_16').type('58-456')
    //Gmina
    cy.get('#id_2_17').type('Testowa')
    //Powiat
    cy.get('#id_2_18').type('Testowy')
    //Województwo
    cy.get('#id_2_19').type('Testowe')
    //Kraj
    cy.get('#id_2_20').type('Testania')
    //e-mail
    cy.get('#id_2_21').type('test@testowy.com')
    //telefon
    cy.get('#id_2_68').type('123123123')
    //Osoba pracująca
    cy.get('input[type="radio"]').check('rcaid_25')
    //Wykonywany zawód
    cy.get('input[type="radio"]').check('rcaid_31')

    cy.get('input[type="radio"]').check('rcaid_33')

    cy.get('input[type="radio"]').check('rcaid_35')

    cy.get('input[type="radio"]').check('rcaid_37')

    cy.get('input[type="radio"]').check('rcaid_40')

    cy.get('input[type="radio"]').check('rcaid_42')

    cy.get('input[type="radio"]').check('rcaid_44')

    cy.get('input[type="radio"]').check('rcaid_46')

    //Wysłanie formularza
    cy.get('input[type="submit"]').click()

})