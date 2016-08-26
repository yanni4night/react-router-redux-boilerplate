/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-08-26[18:00:14]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

//import {createAction} from 'redux-actions'
import * as T from '../constant/action-types'
import {push} from 'react-router-redux'

// Exactly correct way to navigate
export const toIndex = () => push('/')
export const toAbout = () => push('/about')