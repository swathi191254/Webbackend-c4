const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
        name :{type: 'string', required: true},
        emai : {type:"string", required: true},
        password : {type:"string", required: true},
        profile_url : [{type:"string", required: true}],
        roles : {type:"string", required: true},
    
},
{
    versionKey:false,
    timestamps: true,

})

module.exports = mongoose.model("user",userSchema)