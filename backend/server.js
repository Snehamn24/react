const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("url").then(()=>console.log("MongoDb connected")).catch((err)=>console.log(err));

app.use("/api",reviewRoutes);

app.listen(5000,()=>{
    console.log("Server running on the port 5000")

});
