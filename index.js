/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-08-26[16:45:44]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'


import * as reducers from './reducer/'
import * as actions from './action/'

import App from './component/app'
import Index from './component/index'
import About from './component/about'
import NoMatch from './component/404'

const mapState2Props = state => ({current: state.current})

const mapDispatch2Props = dispatch => bindActionCreators(actions, dispatch)

const IndexCom = connect(mapState2Props, mapDispatch2Props)(Index)
const AboutCom = connect(mapState2Props, mapDispatch2Props)(About)

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }), applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store)

render(<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={IndexCom}></IndexRoute>
            <Route path="about" component={AboutCom}></Route>
            <Route path="*" component={NoMatch}></Route>
        </Route>
    </Router>
  </Provider>, document.querySelector('#react-root'))
