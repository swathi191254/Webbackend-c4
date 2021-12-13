const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    name : {type:"String", required: true},
    theater_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"theater", required: true
    }
})
modules.exports = mongoose.model("screen",screenSchema)