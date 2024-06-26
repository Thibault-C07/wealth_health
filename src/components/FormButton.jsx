import React, { useState } from 'react'
import propTypes from 'prop-types'
import '../styles/FormButton.css'

const FormButton = (props) => {
  const [isClicked, setIsClicked] = useState(false) // Track button click state

  const handleClick = () => {
    setIsClicked(true) // Update click state
    if (props.onSubmit) {
      props.onSubmit() // Call provided onSubmit function if available
    }
  }

  return (
    <button
      className="form_button"
      disabled={isClicked} // Disable button after click to prevent multiple submissions
      onClick={handleClick}
    >
      <h3 className="form_button_text">{props.title}</h3>
    </button>
  )
}

FormButton.propTypes = {
  title: propTypes.string.isRequired,
  onSubmit: propTypes.func, // Optional prop for custom submit behavior
}

export default FormButton
