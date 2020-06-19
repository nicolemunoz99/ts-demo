import React, { useState, useEffect } from 'react';
import Page from './components/molecules/Page';
import SalaryInputGroup from './modules/SalaryInputGroup';
import NameInputGroup from './modules/NameInputGroup';
import FormHeader from './components/atoms/FormHeader';
import EmployeeList from './components/molecules/EmployeeList';
import PosNumInput from './components/atoms/PosNumInput';
import Section from './components/atoms/Section';
import { InputField } from './components/atoms/Input';
import Submit from './modules/Submit';
import axios from 'axios';

const baseUrl = "http://localhost:4000"

function App() {
  let [username, setUsername] = useState('');
  let [formData, setFormData] = useState(initState);
  let [allUsers, setUsers] = useState([]);
  let [usersById, setById] = useState({});


  useEffect(() => {
    if (allUsers) getUsers()
  }, [])

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  }

  const handleSignin = () => {
    axios.post(`${baseUrl}/signin`);
  }
  
  const getUsers = async () => {
    let fetchedUsers = (await axios.get(baseUrl)).data;
    setUsers(fetchedUsers);
  };

  const handleChange = (e: any) => {
    let newUser = {...formData, [e.target.id]: e.target.value};
    setFormData(newUser);
  };

  const handleSubmitNewUser = async () => {
    let { currency, salaryNum, ...name} = formData
    let newUser = {
      name: name,
      salary: { salaryNum: Number(salaryNum),  currency}
    };
    setFormData(initState);
    await axios.post(baseUrl, newUser);
    await getUsers();
  };

  const handleIdInput = async (e: any) => {
    let id = Number(e.target.value);
    let searchResult: any = ( await axios.get(`${baseUrl}/user/${id}`) ).data;
    setById(searchResult);
  }

  return (
    <Page title="My App">

      <Section>
        <FormHeader level="h1">Sign In</FormHeader>
        <InputField id="username" placeholder="Username" onChange={handleUsernameChange} />
        <Submit onSubmit={handleSignin} />
      </Section>

      <Section>
        <FormHeader level="h1">Enter New Employee</FormHeader>
        <NameInputGroup onChange={handleChange} />
        <SalaryInputGroup onChange={handleChange} />
        <Submit onSubmit={handleSubmitNewUser} />
      </Section>

      <Section>
        <FormHeader level="h1">Search by ID</FormHeader>
        <PosNumInput onChange={handleIdInput} placeholder="Enter ID"/>
        <EmployeeList employeeList={[usersById]} />
      </Section>

      <Section>
        <FormHeader level="h1">All Employees</FormHeader>
        <EmployeeList employeeList={allUsers} />
      </Section>

    </Page>
  );
}

export default App;

const initState = {
  namePref: '',
  name: '',
  nameSuff: '',
  currency: 'USD',
  salaryNum: '',
}


