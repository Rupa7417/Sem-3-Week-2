//import express from 'express';
const express=require('express');
const dbconnect =require('./src/config/db'); //import db //import router
const routes =require('./src/routes/adminroutes');
const cors = require('cors');
const app=express();
dbconnect();
app.use(express.json());
app.use(cors());

app.post('/',(req,res)=>{
    res.send('Hello, How are you??');
})
app.use('/auth',routes);

const port=5000;
app.listen(port,()=>{
    console.log(`Server is running with ${port}`);
})