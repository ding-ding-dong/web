import React, { Component } from 'react'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Input from 'material-ui/Input'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'

import * as actions from '../actions'

class DrawerComponent extends Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    this.props.fetchSources()
  }

  toggle = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { sources } = this.props
    const { isOpen } = this.state

    return (
      <div>
        <Drawer type="persistent" open={isOpen}>
          <Input placeholder="Type to search" />
          <List>
            {sources.map(source => (
              <ListItem key={source.key} button>
                <ListItemText primary={source.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" onClick={this.toggle}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ sources }) => ({
  sources,
})

export default connect(mapStateToProps, actions)(DrawerComponent)
