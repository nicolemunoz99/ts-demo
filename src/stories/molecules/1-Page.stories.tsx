import React, { FC } from 'react';
import Page from '../../components/molecules/Page';

export default {
  title: 'molecules/Page',
  parameters: {
    notes: 'Input Group for form https://staging.talagentfinancial.com/add-new-client'
  }
};

export const Default: FC = () => {
  return (
    <Page title="Example Title">
      Content goes content
    </Page>
  )
}