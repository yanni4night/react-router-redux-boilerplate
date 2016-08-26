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

export function title(state = 'hello', {type, payload}) {
    if (type === T.SET_TITLE) {
        return payload
    }
    return state;
}