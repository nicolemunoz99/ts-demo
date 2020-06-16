import React from 'react';
import { ButtonPrimary, ButtonSecondary, ButtonAsText } from '../../components/atoms/Buttons.tsx'
import ButtonTabBase from '../../components/atoms/ButtonTabBase.tsx';

export default {
  title: 'atoms/Tab',
};

export const TabActive = () => {
  return (
    <>
      <div>
        <ButtonTabBase>Inactive Tab</ButtonTabBase>
      </div>
      <div>
        <ButtonTabBase active>Active Tab</ButtonTabBase>
      </div>
    </>
  );
};