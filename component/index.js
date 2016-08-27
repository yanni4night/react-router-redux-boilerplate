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
import {Link} from 'react-router'

export default class Index extends React.Component {
    setTitle() {
        const cu = this.refs.title.value;
        this.props.setTitle(cu);
    }
    render() {
        return (
            <div>
                <div className="gallery">
                    <div><img src="http://ww3.sinaimg.cn/large/006y8lVajw1f78uar6to5j30rs0idtai.jpg"/></div>
                    <div className="title">BOILERPLATE</div>
                    <div className="btns"><a href="https://github.com/yanni4night/react-router-redux-boilerplate/releases" className="btn">DOWNLOAD</a><Link to="/about" className="btn">ABOUT</Link></div>
                </div>
            </div>)
    }
}
