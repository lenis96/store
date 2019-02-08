const express=require('express')
const productsRoutes=require('./productsRoutes')
const categoriesRoutes=require('./categoriesRoutes')
const auth=require('./auth')
const api=express.Router()


api.use('/product',productsRoutes)
api.use('/category',categoriesRoutes)
api.use('/auth',auth)



module.exports=api