'use strict';
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', async (_, res) => {
    res.sendFile('index.html');
})

module.exports = app;
