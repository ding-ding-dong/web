import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

import { DetailContainer, DetailBody } from './styled'

class Feed extends Component {
  render() {
    const { feed: { feed } } = this.props

    return (
      <DetailContainer>
        {feed && (
          <DetailBody>
            <Typography type="headline" component="h3" paragraph>
              {feed.title}
            </Typography>
            <Typography component="p" dangerouslySetInnerHTML={{ __html: feed.description }}>
            </Typography>
          </DetailBody>
        )}
      </DetailContainer>
    )
  }
}

export default Feed
