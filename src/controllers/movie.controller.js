const express = require('express');

const router = express.Router();

const Movie = require("../models/movies.model");

router.post("/",async(req,res)=>{
    try{
    const movie = await Movie.create(req.body);
    return res.status(201).json({ movie})
    }
    catch(err){
        return res.status(500).json({statu :"failed",message:err.message});
    }
})
router.get('/', async (req, res)=>{
    try{
        const movies = await Seat.find({actor:{$eq: 'express'}}).lean().exec();

        return res.send(movies)
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
})

module.exports = router;