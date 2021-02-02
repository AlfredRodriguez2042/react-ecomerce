import {
  AppBar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import Search from '../../Components/Search'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}))

const Header = ({ title }) => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Container component="header" maxWidth="xl">
          <Grid container justify="space-between" alignItems="center">
            <Typography
              component="h2"
              variant="h5"
              noWrap
              className={classes.title}
            >
              {title}
            </Typography>
            <Search />
            <NavBar />
          </Grid>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
