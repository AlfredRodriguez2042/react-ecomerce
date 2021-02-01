import { AppBar, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import NavBar from './NavBar'

const Header = ({ title }) => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Container component="header" maxWidth="xl">
          <Grid container justify="space-between" alignItems="center">
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <NavBar />
          </Grid>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
