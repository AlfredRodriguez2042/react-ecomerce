import {
  AppBar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import Search from '../../Components/Search'
import Cart from '../../Components/Buttons/Cart'
import Logo from '../../Components/Logo'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    flex: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
      fontWeight: 'bold',
      paddingTop: '5px',
    },
  },
  logo: {
    height: '32px',
  },
  grid: {
    flexWrap: 'nowrap',
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
}))

const Header = ({ title }) => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="inherit">
      <Container component="header" maxWidth="xl">
        <Grid container className={classes.grid}>
          <div className={classes.brand}>
            <Link to="/" className={classes.brand}>
              <Logo className={classes.logo} />
              <Typography
                component="h2"
                variant="h5"
                noWrap
                className={classes.title}
              >
                {title}
              </Typography>
            </Link>
          </div>
          <div className={classes.grow}>
            <Search />
            <NavBar />
            <Link to="/cart">
              <Cart />
            </Link>
          </div>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Header
