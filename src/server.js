const express = require('express');

const app = express();

const connect = require('./config/db');
const start = async() => {
    await connect();

    app.listen(1234,()=>{
        console.log('listening on 1234');
    })
}
start()