import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import '../styles/EmployeeList.css'
import { EmployeeContext } from '../components/EmployeeContext'

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext)
  const [searchText, setSearchText] = useState('')

  const tableColumns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'ZIP Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
  ]

  const listTableStyles = {}

  const toggleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase())
  }

  const filteredEmployees = employees.filter((employee) => {
    return Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchText),
    )
  })

  return (
    <main className="list_wrapper">
      <h2 className="list_title">- Current Employees -</h2>
      <div className="list_search_wrapper">
        <label className="list_search_label" htmlFor="list_search_input">
          Search:
        </label>
        <input
          className="list_search_input"
          type="text"
          id="list_search_input"
          value={searchText}
          onChange={toggleSearch}
        />
      </div>
      <DataTable
        className="list_table"
        columns={tableColumns}
        data={filteredEmployees}
        striped={true}
        highlightOnHover={true}
        customStyles={listTableStyles}
        pagination={true}
      />
      <Link className="list_link" to="/">
        Home
      </Link>
    </main>
  )
}

export default EmployeeList
