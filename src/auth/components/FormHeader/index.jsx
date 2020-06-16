import React from 'react'

const FormHeader = props => {
  return (
    <h2
      className="authentication-form-head-centered"
      data-testid="form-head-content"
    >
      {props.text}
    </h2>
  )
}

export default FormHeader
