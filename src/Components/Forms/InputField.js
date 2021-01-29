import { TextField } from '@material-ui/core'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

const InputField = ({ name, required = false, type = 'text' }) => {
  return (
    <Field
      required={required}
      label={name}
      name={name}
      type={type}
      as={TextField}
      helperText={<ErrorMessage name={name} />}
    />
  )
}

export default InputField
