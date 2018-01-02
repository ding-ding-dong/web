import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import List, { ListItem, ListItemText } from 'material-ui/List'

import { ListContainer } from './styled'

class Feeds extends Component {
  render() {
    const { feeds } = this.props

    return (
      <ListContainer>
        <List component="div">
          {feeds.map(feed => (
            <ListItem key={feed.uuid} button component={Link} to={`/feeds/${feed.uuid}`}>
              <ListItemText primary={feed.feed.title} secondary={feed.feed.description} />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    )
  }
}

export default Feeds
