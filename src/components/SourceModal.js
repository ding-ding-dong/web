import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent } from 'material-ui/Card'

import * as actions from '../actions'

const styles = theme => ({
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

const initialState = {
  name: '',
  url: '',
}

class SourceModal extends Component {
  state = {
    ...initialState,
  }

  updateState = (name, value) => {
    this.setState({ [name]: value })
  }

  save = () => {
    const source = this.state
    const options = this.props.source || { isNew: true }

    this.props.fetchSource({ source, options }).then(() => {
      this.setState(initialState)
      this.props.onClose()
    })
  }

  render() {
    const { classes: { modal } } = this.props

    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Card style={getModalStyle()} className={modal}>
          <CardContent>
            <Typography type="subheading" color="inherit">添加RSS源</Typography>
            <TextField label="名称" margin="normal" fullWidth name="name" value={this.state.name} onChange={e => this.updateState(e.currentTarget.name, e.currentTarget.value)} />
            <TextField label="URL" margin="normal" fullWidth name="url" value={this.state.url} onChange={e => this.updateState(e.currentTarget.name, e.currentTarget.value)} />
          </CardContent>
          <CardActions>
            <Button raised color="primary" onClick={this.save}>确定</Button>
          </CardActions>
        </Card>
      </Modal>
    )
  }
}

export default connect(null, actions)(withStyles(styles)(SourceModal))
