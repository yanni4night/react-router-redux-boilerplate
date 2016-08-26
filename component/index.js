/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-08-26[16:51:36]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import React from 'react'

export default class Index extends React.Component {
    render() {
        return (<div>
            <h2>INDEX</h2>
            <button type="button" onClick={this.props.toAbout}>to About</button>
            </div>)
    }
}
