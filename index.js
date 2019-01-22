'use strict'

const express=require('express')
const bodyParser=require('body-parser')
const path = require('path');
const app=express()
const api=require('./routes/api')

app.use(bodyParser.json())

app.use(express.static('public'))


app.get('/',(req,res)=>{
})
app.use('/api',api)

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(8080,()=>{
    console.log('server running on port 8080')
})