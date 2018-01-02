/*
<div className="drawer"></div>
<div className="layout-contianer">
  <div className="app-bar"></div>
  <div className="app-body"></div>
</div>
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItemText } from 'material-ui/List'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'

import * as actions from '../actions'
import { LayoutContainer, SearchBox, SourceItem, Container, AppBody } from './styled'

const styles = {
  paperAnchorLeft: {
    maxWidth: 180,
  },
}

class Layout extends Component {
  state = {
    isDrawerOpen: true,
  }

  componentDidMount() {
    const { sources } = this.props

    if (sources.length === 0) {
      this.props.fetchSources()
    }
  }

  toggle = () => {
    const { isDrawerOpen } = this.state
    this.setState({ isDrawerOpen: !isDrawerOpen })
  }

  getPrevDate = () => {
    return moment.utc().utcOffset('+0800').add(-8, 'hours').add(-1, 'day').format('YYYY-MM-DD')
  }

  addDate = ({ date, value }) => {
    return moment.utc(date).utcOffset('+0800').add(value, 'day').format('YYYY-MM-DD')
  }

  render() {
    const { classes, match: { params: { date: paramDate, key } }, sources, Body } = this.props
    const { isDrawerOpen } = this.state

    const date = paramDate ? paramDate : this.getPrevDate()
    const currentSource = key ? sources.find(source => source.key === key) : sources[0]

    return (
      <div>
        <Drawer type="persistent" classes={{ paperAnchorLeft: classes.paperAnchorLeft }} open={isDrawerOpen}>
          <SearchBox placeholder="搜索" />
          <List component="div">
            {sources.map(source => (
              <SourceItem button disableGutters color="primary" key={source.key} component={Link} to={`/${date}/${source.key}`}>
                <ListItemText primary={source.name} />
              </SourceItem>
            ))}
          </List>
        </Drawer>
        <LayoutContainer isDrawerOpen={isDrawerOpen}>
          {currentSource && (
            <AppBar position="static">
              <Toolbar>
                <IconButton color="contrast" onClick={this.toggle}>
                  <MenuIcon />
                </IconButton>
                <Container>
                  <Typography type="title" color="inherit">
                    {currentSource.name}
                  </Typography>
                </Container>
                <Container>
                  <IconButton color="contrast" component={Link} to={`/${this.addDate({ date, value: 1 })}/${currentSource.key}`}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <Typography type="title" color="inherit">{date}</Typography>
                  <IconButton color="contrast" component={Link} to={`/${this.addDate({ date, value: -1 })}/${currentSource.key}`}>
                    <ChevronRightIcon />
                  </IconButton>
                </Container>
              </Toolbar>
            </AppBar>
          )}
          <AppBody>
            <Body />
          </AppBody>
        </LayoutContainer>
      </div>
    )
  }
}

const mapStateToProps = ({ sources }) => ({
  sources,
})

export default withRouter(connect(mapStateToProps, actions)(withStyles(styles)(Layout)))
