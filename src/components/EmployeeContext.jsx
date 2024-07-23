import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const EmployeeContext = createContext()

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      startDate: '2020-01-01',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      department: 'Sales',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1985-05-15',
      startDate: '2018-07-01',
      street: '456 Elm St',
      city: 'Othertown',
      state: 'TX',
      zipCode: '67890',
      department: 'Marketing',
    },
  ])

  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
