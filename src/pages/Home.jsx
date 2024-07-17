import React, { useState } from 'react'
import Form from '../components/Form.jsx'
import FormButton from '../components/FormButton'
import { states } from '../datas/states.js'
import { departments } from '../datas/departments.js'
import Modal from 'react-modal'
import '../styles/Home.css'
import DatetimePicker from 'datetimepicker-thibault'

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
    const { id, value } = event.target
    setEmployeeData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleDateChange = (id, date) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      [id]: date,
    }))
  }

  const handleSave = () => {
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
            onChange={handleInputChange}
          />
        </div>

        <div className="create_form_container">
          <div className="form_group">
            <label className="datetime" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <DatetimePicker
              value={employeeData.dateOfBirth}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
            />
          </div>

          <div className="form_group">
            <label className="datetime" htmlFor="startDate">
              Start Date
            </label>
            <DatetimePicker
              value={employeeData.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
            />
          </div>
        </div>

        <fieldset className="create_form_fieldset">
          <legend className="create_form_fieldset_legend">Address</legend>

          <div className="create_form_container">
            <Form
              type="input"
              id="street"
              labelTitle="Street"
              inputType="text"
              onChange={handleInputChange}
            />
            <Form
              type="input"
              id="city"
              labelTitle="City"
              inputType="text"
              onChange={handleInputChange}
            />
          </div>

          <div className="create_form_container create_form_container--bottom">
            <Form
              type="select"
              id="state"
              labelTitle="State"
              selectOptions={states}
              selectAbbreviations={true}
              onChange={handleInputChange}
            />
            <Form
              type="input"
              id="zipCode"
              labelTitle="ZIP Code"
              inputType="text"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <Form
          type="select"
          id="department"
          labelTitle="Department"
          selectOptions={departments}
          selectAbbreviations={false}
          onChange={handleInputChange}
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
