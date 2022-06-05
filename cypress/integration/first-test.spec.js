describe('First Test', () => {
	it('Fetch posts', () => {
		cy.visit('http://localhost:3000/');
		cy.intercept('https://jsonplaceholder.typicode.com/posts').as(
			'getPosts'
		);
		cy.get('[data-testid="fetch-posts"]').click();
		cy.wait('@getPosts');
		cy.get('[data-testid="posts"]')
			.children()
			.should('have.length.greaterThan', 10);
	});
});
