import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage.js'; // Update the import path as necessary

describe('LoginPage Component', () => {
  test('renders LoginPage component', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByText('Sign in to us')).toBeInTheDocument();
    expect(screen.getByLabelText('Username or email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    expect(screen.getByText(/First time\?/)).toBeInTheDocument(); // Using a regex
    expect(screen.getByText('Create an account')).toBeInTheDocument();
    expect(screen.getByText('Back to Homepage')).toBeInTheDocument();
  });
});
