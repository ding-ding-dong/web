import React, { Component } from 'react'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Input from 'material-ui/Input'

import * as actions from '../actions'

class DrawerComponent extends Component {
  componentDidMount() {
    this.props.fetchSources()
  }
  render() {
    const { sources } = this.props

    return (
      <Drawer type="persistent" open={true}>
        <Input placeholder="Type to search" />
        <List>
          {sources.map(source => (
            <ListItem key={source.key} button>
              <ListItemText primary={source.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
  }
}

const mapStateToProps = ({ sources }) => ({
  sources,
})

export default connect(mapStateToProps, actions)(DrawerComponent)
