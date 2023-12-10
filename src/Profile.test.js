import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './components/pages/Profile.js'; 

describe('Profile Component', () => {
  test('renders the profile form and updates state on input change', () => {
    render(<Profile />);

    expect(screen.getByText('Your Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Jane Doe' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'jane.doe@email.com' }
    });

    expect(screen.getByLabelText('Name').value).toBe('Jane Doe');
    expect(screen.getByLabelText('Email').value).toBe('jane.doe@email.com');
  });
});
