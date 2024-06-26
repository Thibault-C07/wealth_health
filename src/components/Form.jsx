import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import '../styles/Form.css'

const Form = (props) => {
  return (
    <div className="form_item">
      <label className="form_label" htmlFor={props.id}>
        {props.labelTitle}
      </label>
      <div className="form_input_message_wrapper">
        {props.type === 'input' ? (
          <input
            className="form_input"
            type={props.inputType}
            id={props.id}
            required
          />
        ) : (
          <React.Fragment>
            <Select id={props.id} options={props.selectOptions} />
            <span className="form_error_message">
              Please fill out this field.
            </span>
          </React.Fragment>
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
  selectAbbreviations: PropTypes.bool,
}

export default Form
