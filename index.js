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

const mapState2Props = (state, ownProps) => ({
    title: state.title.get('text'),
    // Visit location from "ownProps".
    // see https://www.npmjs.com/package/react-router-redux#how-do-i-access-router-state-in-a-container-component
    current: ownProps.location.pathname
})

const mapDispatch2Props = dispatch => bindActionCreators(actions, dispatch)

// Use react-redux to wrap the components
const AppCom = connect(mapState2Props, mapDispatch2Props)(App)
const IndexCom = connect(mapState2Props, mapDispatch2Props)(Index)
const AboutCom = connect(mapState2Props, mapDispatch2Props)(About)

// Immutable routerReducer initial state
// see https://github.com/reactjs/react-router-redux/blob/v4.0.5/src/reducer.js#L8
const routerReducerInitialState = new Map({'locationBeforeTransitions': null});

// Custom routerReducer due to immutable state
// see https://www.npmjs.com/package/react-router-redux#what-if-i-use-immutablejs-with-my-redux-store
const immutableRouterReducer = (state = routerReducerInitialState, {type, payload}) => {
    if (type === LOCATION_CHANGE) {
        return state.set('locationBeforeTransitions', payload)
    }

    return state
}

const store = createStore(
    combineReducers({
        ...reducers,
        routing: immutableRouterReducer
    }),
    // apply routerMiddleware to response push action 
    // see https://www.npmjs.com/package/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
    applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store, {
    // see https://www.npmjs.com/package/react-router-redux#what-if-i-use-immutablejs-with-my-redux-store
    selectLocationState: state => ({locationBeforeTransitions: state.routing.get('locationBeforeTransitions')}) 
})

render(<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={AppCom}>
            <IndexRoute component={IndexCom}></IndexRoute>{/*"/"*/}
            <Route path="about" component={AboutCom}></Route>{/*"/about"*/}
            <Route path="*" component={NoMatch}></Route>{/*not matched*/}
        </Route>
    </Router>
  </Provider>, document.querySelector('#react-root'))
