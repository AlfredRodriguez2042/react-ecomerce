import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import moment from 'moment'
import { CloudUpload } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  avatar: {
    width: 100,
    height: 100,
  },
}))

const ProfileContent = () => {
  const classes = useStyles()
  return (
    <>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Avatar
              className={classes.avatar}
              src="https://material-ui.com/static/images/avatar/1.jpg"
              alt="avatar"
            />
            <Typography variant="h4">Alfredo Rodriguez G.</Typography>
            <Typography variant="h6">Web Developer</Typography>
            <Typography variant="body1">Buenos Aires - Argentina</Typography>
            <Typography variant="body1">
              {moment().format('hh:mm A')}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            startIcon={<CloudUpload />}
          >
            Upload image
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProfileContent
