import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import { Grid, makeStyles } from '@material-ui/core'
import Footer from '../Footer'

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: '5px',
  },
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
  },
}))

const PublicLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12} xl={12} className={classes.header}>
          <Header title="Shopify" />
        </Grid>
      </Grid>
      <Grid item>{children}</Grid>

      <Footer />
    </div>
  )
}

PublicLayout.prototypes = {
  children: PropTypes.node.isRequired,
}
export default PublicLayout
