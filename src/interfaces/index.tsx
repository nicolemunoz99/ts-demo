import { FC } from 'react';

export interface InputProps {
  id?: string,
  error?: boolean,
  type?: string,
  helperText?: string,
  errorText?: string,
  width?: string,
  value?: string,
  placeholder?: string,
  onChange: (e:object)=>void,
};


interface optionInterface {
  value: string,
  label: string,
}

export interface SelectorProps extends InputProps {
  options: optionInterface[],
  defaultSelection?: number,
  SelectProps?: object,
  select?: boolean,
  value?: string,

};


export interface GroupInputProps {
  title?: string,
  units?: string,  
};

export interface ButtonTabsProps {
  active: boolean,
};

export interface PageProps {
  title: string,
};
