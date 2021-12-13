const express = require('express');

const app = express();

app.use(express.json())

const connect = require('./config/db');

const moveController = require('./controllers/movie.controller');
const showController = require('./controllers/shows.controller');
const seatController = require('./controllers/seats.controller');

app.use("/movies", moveController);
app.use("/shows", showController);


const start = async() => {
    await connect();

    app.listen(1234,()=>{
        console.log('listening on 1234');
    })
}
start()