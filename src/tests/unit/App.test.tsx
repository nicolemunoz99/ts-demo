import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const textElement = getByText("My App");
  expect(textElement).toBeInTheDocument();
});

test('renders input group titles', () => {
  const { getByText } = render(<App />);
  const nameTitle = getByText("Name");
  const salaryTitle = getByText("Salary");
  expect(nameTitle).toBeInTheDocument();
  expect(salaryTitle).toBeInTheDocument();
  
});
