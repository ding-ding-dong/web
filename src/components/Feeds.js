import React, { Component } from 'react'
import { connect } from 'react-redux'

import List, { ListItem, ListItemText } from 'material-ui/List'

import * as actions from '../actions'
import { ListContainer } from './styled'

class Feeds extends Component {
  componentDidMount() {
    this.props.fetchFeeds({ date: '2017-12-26', key: '36kr' })
  }
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

const mapStateToProps = ({ feeds }) => ({
  feeds,
})

export default connect(mapStateToProps, actions)(Feeds)
