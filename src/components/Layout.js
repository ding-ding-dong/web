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
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import deepPurple from 'material-ui/colors/deepPurple'
import Modal from 'material-ui/Modal'
import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent } from 'material-ui/Card'

import * as actions from '../actions'
import { LayoutContainer, SearchBox, SourceItem, AppBody, ToolbarTitle } from './styled'

const styles = theme => ({
  paper: {
    height: '100%',
  },
  paperAnchorLeft: {
    maxWidth: 180,
  },
  colorPrimary: {
    color: deepPurple['A700'],
  },
  modal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class Layout extends Component {
  state = {
    isDrawerOpen: false,
    isModalOpen: false,
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

  getCurrentDate = () => {
    return moment().format('YYYY-MM-DD')
  }

  getPrevDate = () => {
    return moment(this.getCurrentDate()).add(-1, 'day').format('YYYY-MM-DD')
  }

  displayDate = date => {
    if (date === this.getPrevDate()) {
      return '昨天'
    } else if (date === this.getCurrentDate()) {
      return '今天'
    } else {
      return date
    }
  }

  addDate = ({ date, value }) => {
    return moment.utc(date).utcOffset('+0800').add(value, 'day').format('YYYY-MM-DD')
  }

  render() {
    const { classes: { paper, paperAnchorLeft, colorPrimary, modal } } = this.props
    const { match: { params: { date: paramDate, key } }, sources, Body } = this.props
    const { isDrawerOpen } = this.state

    const date = paramDate ? paramDate : this.getCurrentDate()
    const currentSource = key ? sources.find(source => source.key === key) : sources[0]

    if (!currentSource) {
      return null
    }

    return (
      <div>
        <Drawer type="persistent" classes={{ paper, paperAnchorLeft }} open={isDrawerOpen}>
          <SearchBox placeholder="搜索" />
          <List component="div">
            {sources.map(source => (
              <SourceItem button disableGutters color="primary" key={source.key} component={Link} to={`/${date}/${source.key}`}>
                <ListItemText primary={source.name} classes={ currentSource.key === source.key ? { text: colorPrimary } : null } />
              </SourceItem>
            ))}
          </List>
        </Drawer>
        <LayoutContainer isDrawerOpen={isDrawerOpen}>
          <AppBar position="static">
            <Toolbar disableGutters>
              <IconButton color="contrast" onClick={this.toggle}>
                <MenuIcon />
              </IconButton>
            
              <ToolbarTitle>
                <IconButton color="contrast" component={Link} to={`/${this.addDate({ date, value: -1 })}/${currentSource.key}`}>
                  <ChevronLeftIcon />
                </IconButton>
                <Button dense color="contrast" component={Link} to={`/${date}/${currentSource.key}`}>
                  <Typography type="subheading" color="inherit">{this.displayDate(date)}</Typography>
                </Button>
                {date !== this.getCurrentDate() && (
                  <IconButton color="contrast" component={Link} to={`/${this.addDate({ date, value: 1 })}/${currentSource.key}`}>
                    <ChevronRightIcon />
                  </IconButton>
                )}
              </ToolbarTitle>

              <Button color="contrast" onClick={() => this.setState({ isModalOpen: true })}>
                <Typography type="subheading" color="inherit">添加RSS源</Typography>
              </Button>
            </Toolbar>
          </AppBar>
          <AppBody>
            <Body />
          </AppBody>
        </LayoutContainer>
        <Modal open={this.state.isModalOpen} onClose={() => this.setState({ isModalOpen: false })}>
          <Card style={getModalStyle()} className={modal}>
            <CardContent>
              <Typography type="headline" color="inherit">添加RSS源</Typography>
              <TextField label="值" value="36kr" margin="normal" fullWidth />
              <TextField label="名称" value="36氪" margin="normal" fullWidth />
              <TextField label="URL" value="http://36kr.com/feed" margin="normal" fullWidth />
            </CardContent>
            <CardActions>
              <Button raised color="primary">确定</Button>
            </CardActions>
          </Card>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ sources }) => ({
  sources,
})

export default withRouter(connect(mapStateToProps, actions)(withStyles(styles)(Layout)))
