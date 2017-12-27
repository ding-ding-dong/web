import React from 'react'

// import PersistentDrawer from './demos/drawers/PersistentDrawer'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Input from 'material-ui/Input'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'
import Paper from 'material-ui/Paper'

export default function Static() {
  return (
    <div>
      <Drawer type="persistent" open={false}>
        <Input placeholder="Type to search" />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Title
          </Typography>
          <IconButton color="contrast">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2016" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2016" />
        </ListItem>
      </List>
      <Paper>
        <Typography type="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  )
}
