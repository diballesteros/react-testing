import React from 'react';
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testing our React application', () => {
	it('Fetch posts', async () => {
		render(<App />);

		expect(screen.getByText(/Modern React Testing/i)).toBeDefined();

		userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));

		await waitForElementToBeRemoved(() =>
			screen.queryByLabelText('loading')
		);

		expect(screen.getByRole('heading', { level: 3 })).toBeDefined();
	});
});
