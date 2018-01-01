import React, { Component } from 'react'

import List, { ListItem, ListItemText } from 'material-ui/List'

import { ListContainer } from './styled'

class Feeds extends Component {
  render() {
    const { feeds } = this.props

    return (
      <ListContainer>
        <List>
          {feeds.map(feed => (
            <ListItem key={feed.uuid} button>
              <ListItemText primary={feed.feed.title} secondary={feed.feed.description} />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    )
  }
}

export default Feeds
