import React from 'react';
import PageMargins from '../atoms/PageMargins';
import PageTitle from '../atoms/PageTitle';
import { PageProps } from '../../interfaces/'

const Page: React.FC<PageProps> = ({ title, children }) => {

  return(
    <PageMargins>
      <PageTitle>{ title }</PageTitle>
      { children }
    </PageMargins>
  )

};

export default Page;