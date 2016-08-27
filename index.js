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
import {Map} from 'immutable'
import {render} from 'react-dom'
import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, LOCATION_CHANGE, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'


import * as reducers from './reducer/'
import * as actions from './action/'

import App from './component/app'
import Index from './component/index'
import About from './component/about'
import NoMatch from './component/404'

const mapState2Props = (state, ownProps) => ({title: state.title.get('text'), current: ownProps.location.pathname})

const mapDispatch2Props = dispatch => bindActionCreators(actions, dispatch)

const AppCom = connect(mapState2Props, mapDispatch2Props)(App)
const IndexCom = connect(mapState2Props, mapDispatch2Props)(Index)
const AboutCom = connect(mapState2Props, mapDispatch2Props)(About)


const initialState = new Map({'locationBeforeTransitions': null});

const immutableRouterReducer = (state = initialState, {type, payload}) => {
    if (type === LOCATION_CHANGE) {
        return state.set('locationBeforeTransitions', payload)
    }

    return state
}

const store = createStore(
  combineReducers({
    ...reducers,
    routing: immutableRouterReducer
  }), applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => ({locationBeforeTransitions: state.routing.get('locationBeforeTransitions')}) 
})

render(<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={AppCom}>
            <IndexRoute component={IndexCom}></IndexRoute>
            <Route path="about" component={AboutCom}></Route>
            <Route path="*" component={NoMatch}></Route>
        </Route>
    </Router>
  </Provider>, document.querySelector('#react-root'))
