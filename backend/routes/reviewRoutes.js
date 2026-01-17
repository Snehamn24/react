const express = require('express');
const Review = require("../models/Review");

const router = express.Router();

router.post("/reviews",async(req,res)=>{
    try{
        const { movieName, reviewText } = req.body;

    const newReview = new Review({
      movieName,
      reviewText,
});

await newReview.save();

res.status(201).json({message:"Review Saved Successfully"});
    }catch(err){
         res.status(500).json({ error: "Failed to save review" });
    }
});
module.exports=router;