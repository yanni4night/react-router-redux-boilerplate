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
import {Map} from 'immutable'

const initialState = new Map({'text': 'hello'});

export function title(state = initialState, {type, payload}) {
    if (type === T.SET_TITLE) {
        return state.set('text', payload)
    }
    return state;
}