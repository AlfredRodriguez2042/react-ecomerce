import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import InputField from '../InputField'

const Register = () => {
  const initialValues = {
    name: '',
  }
  const registerSchema = Yup.object().shape({
    name: Yup.string().min(4).max(8).required(),
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => console.log(values)}
      onReset
    >
      {(props) => {
        const { values, touched, errors } = props
        const { handleBlur, handleChange } = props
        const { isSubmitting, isValid } = props
        const formikProps = (name, type = 'text', initialValue = '') => ({
          name,
          label: name,
          type,
          value:
            typeof values[name] !== 'undefined' ? values[name] : initialValue,
          onChange: handleChange,
          onBlur: handleBlur,
          error: touched[name] && errors[name],
          helperText: touched[name] ? errors[name] : '',
        })
        return (
          <Form>
            <TextField {...formikProps('name')} />
            <TextField {...formikProps('email', 'email')} />
            <TextField {...formikProps('password', 'password')} />
            <InputField name="name" type="password" />
            <Button
              type="submit"
              fullWidth
              disabled={!isValid || isSubmitting}
              color="primary"
            >
              Submit
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Register
