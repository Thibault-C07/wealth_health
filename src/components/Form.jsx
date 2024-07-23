import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import '../styles/Form.css'

const Form = ({ type, id, labelTitle, inputType, selectOptions, onChange }) => {
  const handleSelectChange = (selectedOption) => {
    onChange({ target: { id, value: selectedOption.value } })
  }

  return (
    <div className="form_item">
      <label className="form_label" htmlFor={id}>
        {labelTitle}
      </label>
      <div className="form_input_message_wrapper">
        {type === 'input' ? (
          <input
            className="form_input"
            type={inputType}
            id={id}
            required
            onChange={onChange}
          />
        ) : (
          <Select
            id={id}
            options={selectOptions}
            onChange={handleSelectChange}
          />
        )}
        {type !== 'input' && (
          <span className="form_error_message">
            Please fill out this field.
          </span>
        )}
      </div>
    </div>
  )
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  selectOptions: PropTypes.array,
  onChange: PropTypes.func.isRequired,
}

export default Form
