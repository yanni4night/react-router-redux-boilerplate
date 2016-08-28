/**
 * Copyright (C) 2016 yanni4night.com
 * pantofile.js
 *
 * changelog
 * 2016-08-26[17:02:43]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';


module.exports = panto => {
    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.setOptions({
        cwd: process.cwd(),
        src: '.',
        output: 'dist'
    });

    panto.$(['index.js', '{reducer,component,constant,action}/*.js']).tag('JavaScript').read().babel({
        extend: '.babel.rc'
    }).browserify({
        entry: 'index.js',
        bundle: 'bundle.js',
        process: {
            env: {
                NODE_ENV: 'production'
            }
        }
    }).write();

    panto.$('node_modules/normalize.css/normalize.css').tag('Normalize').copy({
        flatten: true
    });

    panto.$('index.sass').tag('Sass').read().sass().write({
        destname: 'bundle.css'
    });

};