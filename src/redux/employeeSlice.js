import { createSlice } from '@reduxjs/toolkit'

const initialEmployees = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-05-15',
    startDate: '2020-01-01',
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62704',
    department: 'Engineering',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1990-09-30',
    startDate: '2018-03-15',
    street: '456 Elm St',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62704',
    department: 'Marketing',
  },
]

const employeeSlice = createSlice({
  name: 'employees',
  initialState: initialEmployees,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
