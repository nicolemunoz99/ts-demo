import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: { 
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: '2rem 0 2rem 0'
  },
});

interface LabelProps {
  employee: any;
};


const Employee: React.FC<LabelProps> = ({ employee }) => {
  const classes = useStyles();

  let { namePref, name, nameSuff } = employee.data.name;
  let fullName = `${namePref} ${name} ${nameSuff}`
  
  let { currency, salaryNum } = employee.data.salary;
  let fullSalary = `${currency} ${salaryNum}`;
  return (
    <Box className = {classes.root}>
      <div>ID: {employee.id}</div>
      <div>Name: {fullName}</div>
      <div>Salary: {fullSalary}</div>
    </Box>
  );
};

export default Employee;