const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{type:"string", required: true},
    actor:[{type:"string", required}],
    languages:[{type:"string",required:true}],
    director:{type:"string", required:true},
    prster:[{type:"string", required:true}]
});

module.exports = mongoose.model("movie",movieSchema)