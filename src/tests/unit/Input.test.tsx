import React from 'react';
import { render } from '@testing-library/react';
import { InputField } from '../../components/atoms/Input';

let onChange=()=>{}

test('should render input field with specified id, placeholder', () => {
  let id = 'testId';
  let placeholder = 'test placeholder'
  const { container, getByPlaceholderText } = render(<InputField onChange={onChange} id={id} placeholder={placeholder}/>);

  expect(container.querySelector(`input#${id}`)).toBeInTheDocument();
  expect(getByPlaceholderText(placeholder)).toBeInTheDocument
});
