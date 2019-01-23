const express=require('express')
const productsRoutes=require('./productsRoutes')
const auth=require('./auth')
const api=express.Router()
api.use('/product',productsRoutes)
api.use('/auth',auth)



module.exports=api