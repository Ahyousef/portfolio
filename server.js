'use strict'

const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.get('/data', (req, res) => {
    let jsonData = [
        {name: 'ahmad'},
        { name: 'james'},
        { name: 'yousef'}
    ]
    res.json(jsonData)
})

server.use(express.static('./starter-code/public'));


server.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
})

