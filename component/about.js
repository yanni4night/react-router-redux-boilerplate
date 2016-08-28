/**
  * Copyright (C) 2016 yanni4night.com
  * about.js
  *
  * changelog
  * 2016-08-26[16:53:26]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import React from 'react'
import {Link} from 'react-router'

export default class About extends React.Component {
    toIndex(e) {
        e.preventDefault()
        this.props.toIndex()
    }
    setTitle(e) {
        const title = e.target.value
        this.props.setTitle(title)
    }
    render() {
        return (
<div>
    <h1>About this boilerplate</h1>
    <article className="about">
        <p>This is a boilerplate using react-router-redux, including:</p>
        <ul>
        <li>
            navigation by <Link to="/">link</Link>
        </li>
        <li>
            navigation by <a href="#" onClick={e=>this.toIndex(e)}>action</a>
        </li>
        <li>
            set <i>immutable</i> state by <input type="text" onInput={e=>this.setTitle(e)} placeholder="action"/>
        </li>
        </ul>
    </article>
</div>)
    }
}
