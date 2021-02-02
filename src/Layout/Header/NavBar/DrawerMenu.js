import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import React from 'react'
import { Link } from 'react-router-dom'

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
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}))

const DrawerMenu = ({ sections, open }) => {
  const classes = useStyles()
  console.log(open)
  return (
    <Drawer
      open={open}
      classes={{ paper: open ? classes.drawerPaper : classes.drawerPaperClose }}
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
