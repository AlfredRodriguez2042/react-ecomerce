import { Button, TextField } from '@material-ui/core'
import React from 'react'

const BaseForm = (props) => {
  const { values, touched, errors } = props
  const { handleBlur, handleChange } = props
  const { isSubmitting, isValid } = props
  console.log(values)
  const formikProps = (name, initialValue = '') => ({
    name,
    value: typeof values[name] !== 'undefined' ? values[name] : initialValue,
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] && errors[name],
    helperText: touched[name] ? errors[name] : '',
  })
  return (
    <form>
      <TextField {...formikProps('name')} />
      <Button
        type="submit"
        fullWidth
        disabled={!isValid || isSubmitting}
        color="primary"
      >
        Submit
      </Button>
    </form>
  )
}

export default BaseForm
