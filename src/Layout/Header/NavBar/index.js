import { makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  toolbarNav: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    //  color: '#383a42'
    color: '#53575A',
  },
}))

const NavBar = () => {
  const classes = useStyles()
  return (
    <div>
      <Toolbar component="nav" variant="dense" className={classes.toolbarNav}>
        <NavLink to="/" className={classes.toolbarLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={classes.toolbarLink}>
          About
        </NavLink>
      </Toolbar>
    </div>
  )
}

export default NavBar
