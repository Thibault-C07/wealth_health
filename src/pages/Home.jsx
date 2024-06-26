import React from 'react'
import { useState } from 'react'
import Form from '../components/Form.jsx'
import FormButton from '../components/FormButton'
import { states } from '../datas/states.js'
import { departments } from '../datas/departments.js'
import Modal from 'react-modal'
import '../styles/Home.css'

const Home = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  }) // Local state for employee data
  const [isModalOpen, setIsModalOpen] = useState(false) // Local state for modal visibility

  const handleInputChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.id]: event.target.value,
    })
  }

  const handleSave = () => {
    // Handle form submission logic here (e.g., send data to server)
    console.log('Employee data:', employeeData) // Example of accessing data

    // Simulate successful submission and open modal
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  Modal.setAppElement('#root')

  return (
    <main className="create_wrapper">
      <h2 className="create_title">- Create Employee -</h2>
      <form action="#" className="create_form">
        <div className="create_form_container">
          <Form
            type="input"
            id="firstName"
            labelTitle="First Name"
            inputType="text"
            onChange={handleInputChange}
          />
          <Form
            type="input"
            id="lastName"
            labelTitle="Last Name"
            inputType="text"
          />
        </div>

        <div className="create_form_container">
          <Form
            type="input"
            id="dateOfBirth"
            labelTitle="Date of Birth"
            inputType="date"
          />
          <Form
            type="input"
            id="startDate"
            labelTitle="Start Date"
            inputType="date"
          />
        </div>

        <fieldset className="create_form_fieldset">
          <legend className="create_form_fieldset_legend">Address</legend>

          <div className="create_form_container">
            <Form
              type="input"
              id="street"
              labelTitle="Street"
              inputType="text"
            />
            <Form type="input" id="city" labelTitle="City" inputType="text" />
          </div>

          <div className="create_form_container create_form_container--bottom">
            <Form
              type="select"
              id="state"
              labelTitle="State"
              selectOptions={states}
              selectAbbreviations={true}
            />
            <Form
              type="input"
              id="zipCode"
              labelTitle="ZIP Code"
              inputType="text"
            />
          </div>
        </fieldset>

        <Form
          type="select"
          id="department"
          labelTitle="Department"
          selectOptions={departments}
          selectAbbreviations={false}
        />
      </form>

      <FormButton title="Save" onClick={handleSave} />

      {/* CONFIRMATION MODAL */}
      <Modal
        className="modal"
        isOpen={isModalOpen}
        contentLabel="Employee created modal"
      >
        <h2 className="modal_title">Employee Created!</h2>
        <FormButton title="Close" onClick={handleCloseModal} />
      </Modal>
    </main>
  )
}

export default Home
