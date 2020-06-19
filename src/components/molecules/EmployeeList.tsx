import React from 'react';
import Employee from '../atoms/Employee';

interface EmployeeListProps {
  employeeList: any,
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employeeList }) => {

  return (
    <>
    { (employeeList && employeeList.length > 0) ?
        employeeList.map((employee: any, i: number) => {
          return employee.id && <Employee key={i} employee={employee} />
      })
      :
      'No employees'
    }
    </>
  );
};

export default EmployeeList;