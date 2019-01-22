'use strict'

const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/',(req,res)=>{
})

app.listen(8080,()=>{
    console.log('server running on port 8080')
})