'use strict'
require('dotenv').load();
const express=require('express')
const bodyParser=require('body-parser')
const path = require('path');
const app=express()
const api=require('./routes/api')

const passport    = require('passport');

require('./passport');

app.use(bodyParser.json())

app.use(express.static('public'))


app.get('/',(req,res)=>{
})
app.use('/api',api)

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})