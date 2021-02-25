import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const ListItems = ({ url, icon: Icon, classes, title }) => {
  return (
    <ListItem className={classes} button>
      <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
      <Link to={url}>
        <ListItemText primary={title} />
      </Link>
    </ListItem>
  )
}

export default ListItems
