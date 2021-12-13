const express = require('express');


const router = express.Router();

const show = require('../models/shows.model');

router.get('/', async (req, res)=>{
    try{
        const shows = await show.find({movie:{$eq: 'express'}}).lean().exec();

        return res.send(shows)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
})
module.exports = router;