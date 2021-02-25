import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import { Grid, makeStyles } from '@material-ui/core'
import Footer from '../Footer'
import SideBar from './SideBar'

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '5px',
  },
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
  },
  wrapper: {
    // display: 'flex',
    // flex: '1 1 auto',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 72,
    },
  },
}))

const AdminLayout = ({ children }) => {
  const [openMobile, setOpenMobile] = useState(true)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12} xl={12} className={classes.header}>
          <Header />
        </Grid>
      </Grid>
      <div className={classes.wrapper}>
        <SideBar
          onMobileClose={() => setOpenMobile(!openMobile)}
          openMobile={openMobile}
        />
        <Grid item xs={12} sm={12} md={12}>
          {children}
        </Grid>
      </div>

      <Footer />
    </div>
  )
}

AdminLayout.prototypes = {
  children: PropTypes.node.isRequired,
}
export default AdminLayout
