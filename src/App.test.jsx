import React from 'react';
import { describe, expect, it } from 'vitest';
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('Testing our React application', () => {
	it('Fetch posts', async () => {
		const user = userEvent.setup();

		render(<App />);

		expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();

		await waitForElementToBeRemoved(() =>
			screen.queryByLabelText('Loading...')
		);

		expect(screen.getByRole('heading', { level: 3 })).toBeDefined();
	});
});
