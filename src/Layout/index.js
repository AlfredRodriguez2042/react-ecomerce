import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import { Grid, makeStyles } from '@material-ui/core'
import Footer from './Footer'

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: '5px',
  },
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12} xl={12} className={classes.header}>
          <Header title="titleaaaaaaaaaaaaaaaaa" />
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
      <Footer />
    </div>
  )
}

Layout.prototypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
