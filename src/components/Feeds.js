import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import List, { ListItem, ListItemText } from 'material-ui/List'

import { ListContainer } from './styled'

class Feeds extends Component {
  getDate = date => {
    return moment.utc(date).utcOffset('+0800').format('YYYY-MM-DD')
  }

  render() {
    const { feeds } = this.props

    return (
      <ListContainer>
        <List component="div">
          {feeds.map(feed => (
            <ListItem key={feed.uuid} button component={Link} to={`/${this.getDate(feed.feed.date)}/feeds/${feed.uuid}`}>
              <ListItemText primary={feed.feed.title} secondary={feed.feed.description} />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    )
  }
}

export default Feeds
