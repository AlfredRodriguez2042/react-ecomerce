import {
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  grow: {
    flexGrow: 1,
  },
}))
const Login = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <Grid container justify="center" spacing={3} className={classes.grow1}>
        <Grid item xs={12} sm={6} md={4}>
          <Card classes={classes.card}>
            <Typography>header</Typography>
          </Card>
        </Grid>
        <Grid>
          <Card>
            <Typography>header</Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
