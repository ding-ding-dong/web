import React from 'react'

import PersistentDrawer from './demos/drawers/PersistentDrawer'

// import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
// import Input from 'material-ui/Input'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
import TextField from 'material-ui/TextField'

export default function Static() {
  return (
    <div>
      <PersistentDrawer />
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

      <form>
        <TextField label="值" value="36kr" margin="normal" fullWidth />
        <TextField label="名称" value="36氪" margin="normal" fullWidth />
        <TextField label="URL" value="http://36kr.com/feed" margin="normal" fullWidth />
      </form>

      <Tabs
        indicatorColor="primary"
        textColor="primary"
        scrollable
        scrollButtons="on"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </div>
  )
}
