export const getByClassName = (name) => cy.get(`.${name}`);
export const getById = (name) => cy.get(`#${name}`);
export const getByInputName = (name) => cy.get(`input[name=${name}]`);
export const getByTitle = (name) => cy.get(`[title=${name}]`);
