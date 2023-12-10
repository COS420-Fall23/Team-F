import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counselors from './components/pages/counselor.js';

describe('Counselors Component', () => {
  test('renders Counselors component', () => {
    render(<Counselors />);
    expect(screen.getByText('Counselors at University of Maine Orono')).toBeInTheDocument();
    expect(screen.getByText('Counselors at University of Southern Maine')).toBeInTheDocument();
  });

  test('displays counselors for University of Maine Orono when corresponding button is clicked', () => {
    render(<Counselors />);
    fireEvent.click(screen.getByText('Counselors at University of Maine Orono'));
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Peter Glenn')).toBeInTheDocument();
    // Optionally, you can also check for the presence of bios and availability.
  });

  test('displays counselors for University of Southern Maine when corresponding button is clicked', () => {
    render(<Counselors />);
    fireEvent.click(screen.getByText('Counselors at University of Southern Maine'));
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument();
    expect(screen.getByText('Rachel Lee')).toBeInTheDocument();
    expect(screen.getByText('Michael Thompson')).toBeInTheDocument();
    // Optionally, check for bios and availability here as well.
  });

  test('toggles active class on buttons when clicked', () => {
    render(<Counselors />);
    const btnA = screen.getByText('Counselors at University of Maine Orono');
    const btnB = screen.getByText('Counselors at University of Southern Maine');
    fireEvent.click(btnA);
    expect(btnA).toHaveClass('active');
    expect(btnB).not.toHaveClass('active');
    fireEvent.click(btnB);
    expect(btnB).toHaveClass('active');
    expect(btnA).not.toHaveClass('active');
  });
});
