import React from 'react';
import { render } from '@testing-library/react';
import InputGroup from '../../components/molecules/InputGroup';

test('should render title and units', () => {
  let groupTitle: string = 'group title';
  let groupUnits: string = 'per month';
  const { container, getByText} = render(<InputGroup title={groupTitle} units={groupUnits}/>);
  expect(getByText(groupTitle)).toBeInTheDocument(); 
  expect(getByText(groupUnits)).toBeInTheDocument();
})
