/*
<div className="drawer"></div>
<div className="layout-contianer">
  <div className="app-bar"></div>
  <div className="body"></div>
</div>
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

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
import { LayoutContainer, SearchBox, SourceItem, Body, ContainerCentered } from './styled'
import Feeds from './Feeds'

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
    this.props.fetchSources()
  }

  toggle = () => {
    const { isDrawerOpen } = this.state
    this.setState({ isDrawerOpen: !isDrawerOpen })
  }

  render() {
    const { classes, sources } = this.props
    const { isDrawerOpen } = this.state

    return (
      <div>
        <Drawer type="persistent" classes={{ paperAnchorLeft: classes.paperAnchorLeft }} open={isDrawerOpen}>
          <SearchBox placeholder="搜索" />
          <List>
            {sources.map(source => (
              <SourceItem button disableGutters key={source.key}>
                <ListItemText primary={source.name} />
              </SourceItem>
            ))}
          </List>
        </Drawer>
        <LayoutContainer isDrawerOpen={isDrawerOpen}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" onClick={this.toggle}>
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit">
                36氪
              </Typography>
              <ContainerCentered>
                <IconButton color="contrast">
                  <ChevronLeftIcon />
                </IconButton>
                <Typography type="title" color="inherit">
                  2018-01-01
                </Typography>
                <IconButton color="contrast">
                  <ChevronRightIcon />
                </IconButton>
              </ContainerCentered>
            </Toolbar>
          </AppBar>
          <Body>
            <Feeds />
          </Body>
        </LayoutContainer>
      </div>
    )
  }
}

const mapStateToProps = ({ sources }) => ({
  sources,
})

export default connect(mapStateToProps, actions)(withStyles(styles)(Layout))
