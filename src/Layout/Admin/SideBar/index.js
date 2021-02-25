import {
  Box,
  Divider,
  Drawer,
  Hidden,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import {
  Dashboard,
  People,
  Settings,
  LocalMall,
  ChevronLeft,
} from '@material-ui/icons'
import React from 'react'
import Logo from 'src/Components/Logo'
import ListItems from './ListItems'

const items = [
  {
    title: 'Dashboard',
    icon: Dashboard,
    url: '/admin/dashboard',
  },
  {
    title: 'Products',
    icon: LocalMall,
    url: '/admin/products',
  },
  {
    title: 'Customers',
    icon: People,
    url: '/admin/customers',
  },
  {
    title: 'Settings',
    icon: Settings,
    url: '/admin/settings',
  },
]
const useStyles = makeStyles((theme) => ({
  desktop: {
    width: 256,
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
  logo: {
    height: '34px',
  },
  brand: {
    height: '60px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const SideBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <Drawer
        classes={{
          paper: openMobile ? classes.desktop : classes.drawerPaperClose,
        }}
        anchor="left"
        open={openMobile}
        variant="permanent"
      >
        <Box disableRipple onClick={onMobileClose} className={classes.brand}>
          {openMobile ? (
            <>
              <ListItemIcon>
                <Logo className={classes.logo} />
              </ListItemIcon>
              <ListItemText primary="Shopping" />
              <ChevronLeft />
            </>
          ) : (
            <>
              <ListItemIcon>
                <Logo className={classes.logo} />
              </ListItemIcon>
            </>
          )}
        </Box>
        <Divider />
        {items.map((item, i) => (
          <ListItems
            key={i}
            icon={item.icon}
            url={item.url}
            title={item.title}
          />
        ))}
      </Drawer>
    </Hidden>
  )
}

export default SideBar
