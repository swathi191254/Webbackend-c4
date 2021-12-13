const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    name: {type:"string", required: true},
    location: {type:"string", required: true},
})

module.exports = mongoose.model("theater",theaterSchema)