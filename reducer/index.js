/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-08-26[17:11:46]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import * as T from '../constant/action-types'

export function current(state = 'index', action) {
    switch(action.type) {
        case T.TO_INDEX:
        case T.TO_ABOUT:
            return action.payload
        default:
            return state
    }
}