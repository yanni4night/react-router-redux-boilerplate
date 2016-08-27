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
    render() {
        return (<div>
            <h1>About this boilerplate</h1>
            <article>
<p>This is a boilerplate using react-router-redux, including navigation by <Link to="/">link</Link>, navigation by <a href="#" onClick={e=>this.toIndex(e)}>action</a>.
</p>
<p>
The state is stored by immutable.js.
</p>
            </article></div>)
    }
}
