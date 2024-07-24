import React, { useState } from 'react'
import propTypes from 'prop-types'
import '../styles/FormButton.css'

const FormButton = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(true)
    if (props.onSubmit) {
      props.onSubmit(e)
    } else if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <button
      className="form_button"
      disabled={props.disableAfterClick ? isClicked : false}
      onClick={handleClick}
    >
      <h3 className="form_button_text">{props.title}</h3>
    </button>
  )
}

FormButton.propTypes = {
  title: propTypes.string.isRequired,
  onSubmit: propTypes.func,
  onClick: propTypes.func,
  disableAfterClick: propTypes.bool,
}

export default FormButton
