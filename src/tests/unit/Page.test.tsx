import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../components/molecules/Page';

test('renders page title', () => {
  let title: string = "test title"
  const { container, getByText } = render(<Page title={title} />);
  expect(getByText(title)).toBeInTheDocument()
});
