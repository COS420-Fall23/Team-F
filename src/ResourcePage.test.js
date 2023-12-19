import React from 'react';
import { render } from '@testing-library/react';
import ResourcePage from './ResourcePage';

test('renders ResourcePage component', () => {
  const { getByText } = render(<ResourcePage />);
  expect(getByText('University Resources:')).toBeInTheDocument();
  expect(getByText('Let\'s get you in the right direction!')).toBeInTheDocument();
  expect(getByText('UMaine Counseling Center')).toBeInTheDocument();
  expect(getByText('UMaine Student Athlete Mental Health Services')).toBeInTheDocument();
  expect(getByText('UMaine Student Accessibility')).toBeInTheDocument();
  expect(getByText('UMaine Residence Life')).toBeInTheDocument();
  expect(getByText('Back')).toBeInTheDocument();
});
