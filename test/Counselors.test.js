import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counselors from './counselor';

describe('Counselors Component', () => {
  test('renders Counselors component', () => {
    render(<Counselors />);
    expect(screen.getByText('Counselors at Universities in Maine')).toBeInTheDocument();
    expect(screen.getByText('Counselors at University A')).toBeInTheDocument();
    expect(screen.getByText('Counselors at University B')).toBeInTheDocument();
  });

  test('displays counselors for University A when corresponding button is clicked', () => {
    render(<Counselors />);
    fireEvent.click(screen.getByText('Counselors at University A'));
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Peter Glenn')).toBeInTheDocument();
  });

  test('displays counselors for University B when corresponding button is clicked', () => {
    render(<Counselors />);
    fireEvent.click(screen.getByText('Counselors at University B'));
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument();
    expect(screen.getByText('Rachel Lee')).toBeInTheDocument();
    expect(screen.getByText('Michael Thompson')).toBeInTheDocument();
  });

  test('toggles active class on buttons when clicked', () => {
    render(<Counselors />);
    const btnA = screen.getByText('Counselors at University A');
    const btnB = screen.getByText('Counselors at University B');
    fireEvent.click(btnA);
    expect(btnA).toHaveClass('active');
    expect(btnB).not.toHaveClass('active');
    fireEvent.click(btnB);
    expect(btnB).toHaveClass('active');
    expect(btnA).not.toHaveClass('active');
  });
});
