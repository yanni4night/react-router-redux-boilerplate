/**
  * Copyright (C) 2016 yanni4night.com
  * app.js
  *
  * changelog
  * 2016-08-26[16:58:20]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div class="content">{this.props.children}</div>
                <footer>&copy; copyright 2016, current: {this.props.current}, title:{this.props.title}</footer>
            </div>)
    }
}