import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

import { Email, Lock, Visibility, VisibilityOff } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { loginUserAcction } from 'src/Redux/Actions/User'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  input: {
    borderRadius: '24px',
  },
  grid: {
    marginBottom: '16px',
  },
}))
const LoginForm = ({ setClosed }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [showPassword, hiddenPassword] = useState(false)
  const classes = useStyles()
  const initialValues = {
    password: '',
    email: '',
    showPassword: false,
  }
  const registerSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  })

  const onSubmit = (values) => {
    const user = {
      name: 'Alfred',
      role: 'admin',
      email: values.email,
    }
    localStorage.setItem('x-token', JSON.stringify(user))
    dispatch(loginUserAcction())
    history.push('/admin')
    setClosed()
    console.log(values)
  }
  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues,
    onSubmit,
  })
  const {
    isValid,
    isSubmitting,
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
  } = formik
  const formikProps = (name, type = 'text', initialValue = '') => ({
    name,
    // label: name,
    type,
    value: typeof values[name] !== 'undefined' ? values[name] : initialValue,
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] && errors[name],
    helperText: touched[name] ? errors[name] : '',
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid className={classes.grid}>
        <TextField
          placeholder="email"
          fullWidth
          InputProps={{
            classes: { root: classes.input },
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          {...formikProps('email', 'email')}
        />
      </Grid>
      <Grid className={classes.grid}>
        <TextField
          placeholder="password"
          fullWidth
          InputProps={{
            classes: { root: classes.input },

            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => hiddenPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Grid>
      <Grid className={classes.grid}>
        <Button
          className={classes.input}
          type="submit"
          variant="contained"
          fullWidth
          disabled={!isValid || isSubmitting}
          color="primary"
        >
          Submit
        </Button>
      </Grid>
      <Typography align="center">Or Sign up with social media</Typography>
    </form>
  )
}

export default LoginForm
