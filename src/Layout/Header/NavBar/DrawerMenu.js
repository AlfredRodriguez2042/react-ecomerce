import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const drawerWidth = 210
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
}))

const DrawerMenu = ({ sections, setOpen, setClosed }) => {
  const classes = useStyles()
  const location = useLocation()
  useEffect(() => {
    if (setOpen && setClosed) {
      setClosed()
    }
  }, [location.pathname])

  return (
    <Drawer
      open={setOpen}
      onClose={setClosed}
      classes={{
        paper: setOpen ? classes.drawerPaper : classes.drawerPaperClose,
      }}
      variant="temporary"
    >
      <List>
        {sections.map((section, i) => (
          <ListItem button key={i}>
            <Link to={section.url}>
              <ListItemText primary={section.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DrawerMenu
