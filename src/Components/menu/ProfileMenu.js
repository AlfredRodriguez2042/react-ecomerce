import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { ArrowDropDown, ExitToApp, Person, Settings } from '@material-ui/icons'
import { Avatar, IconButton, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  top: {
    top: '56px',
  },
}))
export default function SimpleMenu() {
  const role = useSelector((state) => state.user.user.role)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Avatar
        src="https://material-ui.com/static/images/avatar/1.jpg"
        alt="avatar"
      />
      <IconButton disableRipple onClick={handleClick} size="small">
        <ArrowDropDown />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ top: '38px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={role !== 'admin' ? '/app/profile' : '/admin/profile'}
        >
          <Person
            fontSize="small"
            color="action"
            style={{ marginRight: '5px' }}
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Settings
            fontSize="small"
            color="action"
            style={{ marginRight: '5px' }}
          />
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <ExitToApp
            fontSize="small"
            color="secondary"
            style={{ marginRight: '5px' }}
          />
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}
