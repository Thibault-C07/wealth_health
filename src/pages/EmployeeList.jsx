import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import '../styles/EmployeeList.css'
const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('/api/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
  }, [])

  const tableColumns = []

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
