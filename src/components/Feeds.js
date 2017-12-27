import React, { Component } from 'react'
import { connect } from 'react-redux'

import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FolderIcon from 'material-ui-icons/Folder'

import * as actions from '../actions'

class Feeds extends Component {
  componentDidMount() {
    this.props.fetchFeeds({ date: '2017-12-26', key: '36kr' })
  }
  render() {
    const { feeds } = this.props

    return (
      <List>
        {feeds.map(feed => (
          <ListItem key={feed.uuid} button>
            <Avatar>
              <FolderIcon />
            </Avatar>
            <ListItemText primary={feed.feed.title} secondary={feed.feed.summary} />
          </ListItem>
        ))}
      </List>
    )
  }
}

const mapStateToProps = ({ feeds }) => ({
  feeds,
})

export default connect(mapStateToProps, actions)(Feeds)
