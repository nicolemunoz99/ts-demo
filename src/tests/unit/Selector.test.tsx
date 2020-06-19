import React from 'react';
import { render } from '@testing-library/react';
import Selector from '../../components/atoms/Selector';

let optionsTest = [
  {
    value: 'one',
    label: 'option1',
  },
  {
    value: 'two',
    label: 'option2'
  }
];

test('should render DOM option els having ids equal to option value', () => {

  const { container } = render(<Selector id="testSelector" options={optionsTest} onChange={()=>{}} />);

  expect(container.querySelector('option#one')).toBeInTheDocument();
  expect(container.querySelector('option#two')).toBeInTheDocument();

});



test('should render DOM option elements with text equal to label', () => {

  const { container, getByText } = render(<Selector id="testSelector" options={optionsTest} onChange={()=>{}} />);

  expect(getByText('option1')).toBeInTheDocument();
  expect(getByText('option2')).toBeInTheDocument();

});



