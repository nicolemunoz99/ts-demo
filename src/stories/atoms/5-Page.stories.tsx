import React from 'react';
import PageMargins from '../../components/atoms/PageMargins';
import PageTitle from '../../components/atoms/PageTitle';

export default {
  title: 'atoms/Page',
  parameters: {
    notes: 'Input Group for form https://staging.talagentfinancial.com/add-new-client'
  }
};

export const Margins: React.FC = () => {
  return (
    <PageMargins>
      Container with content is centered on page
    </PageMargins>
  )
};

export const Title: React.FC = () => {
  return (
    <PageTitle>Page Title </PageTitle>
  )
}