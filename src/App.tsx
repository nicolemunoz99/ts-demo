import React from 'react';
import Page from './components/molecules/Page';
import SalaryInputGroup from './modules/SalaryInputGroup';
import NameInputGroup from './modules/NameInputGroup';
// import InputDisplay from './modules/InputDisplay';

function App() {

  const handleChange = (e: any) => {
    console.log('values: ', e.target.id, e.target.value)
  };

  return (
    <Page title="My App">

      <NameInputGroup onChange={handleChange} />

      <SalaryInputGroup onChange={handleChange} />

    </Page>
  );
}

export default App;





interface formInterface {
  namePref: string,
  name: string,
  nameSuff: string,
  currency: string,
  salaryNum: string
};


