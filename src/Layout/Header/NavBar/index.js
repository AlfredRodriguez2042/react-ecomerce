import {
  Button,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DrawerMenu from './DrawerMenu'
import LoginModal from '../../../Components/Modal'
import FormRegister from '../../../Components/Forms/Register'
import ModalForm from '../../../Components/Modal/ModalForm'

const useStyles = makeStyles((theme) => ({
  toolbarNav: {
    //   justifyContent: 'space-between',
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
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const classes = useStyles()
  const handleDrawerOpen = () => {
    setOpen(!open)
  }
  const loginOpen = () => {
    setLogin(true)
  }
  const loginClosed = () => {
    setLogin(false)
  }
  const registerOpen = () => {
    setRegister(true)
  }
  const registerClosed = () => {
    setRegister(false)
  }
  const setClosed = () => setOpen(false)
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarNav}>
      <Hidden smDown>
        <NavLink to="/" className={classes.toolbarLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={classes.toolbarLink}>
          About
        </NavLink>

        <LoginModal open={login} setClosed={loginClosed} setOpen={loginOpen} />
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={registerOpen}
          style={{ marginLeft: '8px' }}
        >
          sign up
        </Button>
        <ModalForm title="Register" open={register} setClosed={registerClosed}>
          <FormRegister setClosed={registerClosed} />
        </ModalForm>
      </Hidden>
      <Hidden mdUp>
        <IconButton edge="start" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </Hidden>

      <DrawerMenu sections={sections} setOpen={open} setClosed={setClosed} />
    </Toolbar>
  )
}

export default NavBar
