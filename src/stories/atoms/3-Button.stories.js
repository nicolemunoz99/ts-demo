import React from 'react';
import { ButtonPrimary, ButtonSecondary, ButtonAsText }  from '../../components/atoms/Buttons.tsx'

export default {
  title: 'atoms/Buttons',
};

export const Button1 = () => <ButtonPrimary>Save changes</ButtonPrimary>

export const Button2 = () => <ButtonSecondary>Cancel</ButtonSecondary>

export const Button3 = () => <ButtonAsText>+ Add another</ButtonAsText>

