import { Hidden, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DrawerMenu from './DrawerMenu'

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
const sections = [
  { name: 'Home', url: '/', icon: 'icon' },
  { name: 'About', url: '/about' },
  {
    name: 'Sign Up',
    url: '/signup',
  },
  {
    name: 'Login',
    url: '/login',
  },
]
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const handleDrawerOpen = () => {
    setOpen(!open)
  }
  return (
    <div onClick={handleDrawerOpen}>
      <Toolbar component="nav" variant="dense" className={classes.toolbarNav}>
        <Hidden smUp>
          <NavLink to="/" className={classes.toolbarLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={classes.toolbarLink}>
            About
          </NavLink>
        </Hidden>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <DrawerMenu sections={sections} open={open} />
      </Toolbar>
    </div>
  )
}

export default NavBar
