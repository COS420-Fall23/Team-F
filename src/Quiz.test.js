import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';

test('renders Quiz component without crashing', () => {
  render(<Quiz />);
  expect(screen.getByText('Quiz: University')).toBeInTheDocument();
});

test('displays the first question initially', () => {
  render(<Quiz />);
  expect(screen.getByText('Would you like to meet someone in person?')).toBeInTheDocument();
});

test('does not show the Back button on the first question', () => {
  render(<Quiz />);
  expect(screen.queryByText('Back')).toBeNull();
});

test('navigates to next question on Continue click', () => {
  render(<Quiz />);
  fireEvent.click(screen.getByText('Continue'));
  expect(screen.getByText('What kind of topics are you struggling with, or have interest in finding resources for?')).toBeInTheDocument();
});


