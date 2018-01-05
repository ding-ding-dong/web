import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../actions'
import { Container } from './styled'
import Layout from './Layout'
import Feed from './Feed'
import Processing from './Processing'

class Body extends Component {
  state = {
    isProcessing: true,
  }

  componentDidMount() {
    const { match: { params: { uuid } } } = this.props

    this.props
      .fetchFeed({ uuid })
      .then(() => {
        this.setState({ isProcessing: false })
      })
  }

  render() {
    const { feed } = this.props
    const { isProcessing } = this.state

    return (
      <Container>
        {isProcessing ? (
          <Processing />
        ) : (
          <Feed feed={feed} />
        )}
      </Container>
    )
  }
}

const mapStateToProps = ({ feed }) => ({
  feed,
})

function FeedDetail() {
  return (
    <Layout Body={withRouter(connect(mapStateToProps, actions)(Body))} />
  )
}

export default FeedDetail
