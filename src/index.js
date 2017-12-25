import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import reducer from './reducers'
import * as Static from './components/static'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Route path="/static" component={Static.StaticDrawer} exact />
        <Route path="/" component={App} exact />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
