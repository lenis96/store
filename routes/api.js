const express=require('express')
const productsRoutes=require('./productsRoutes')
const api=express.Router()

api.use('/product',productsRoutes)



module.exports=api