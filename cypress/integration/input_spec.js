describe('text input', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  });


  it('displays char entered into text input', () => {
    let name = 'my name';
    cy.get('input#name').type(name);
    
    cy.get(`input#name`).should('have.value', name)

  }); 
});

describe('numeric input', () => {

  it('displays numbers, and only numbers, entered into numeric input', () => {
    cy.get('input#salaryNum').type('33').should('have.value', '33');
    cy.visit('/')
    cy.get('input#salaryNum').type('98ddwdfdsf9').should('have.value', '989');
  }); 
  
  it('doesnt display non-numeric chars', () => {
    cy.visit('/')
    cy.get('input#salaryNum').type('letters').should('have.value', '')
  });

  it('displays chars', () => {
    cy.visit('/')
    cy.get('input#salaryNum').type('33').should('have.value', '33')
  });
});

describe('positive numeric input', () => {

  it('should display error for negative numbers', () => {
    cy.visit('/')
    cy.get('input#salaryNum').type('-3').should('have.value', '-3')
    let err = cy.get('#salaryNum-helper-text')
    expect(err).to.exist
  });
});