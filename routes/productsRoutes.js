const express=require('express')
const productsRoutes=express.Router()
const prodructsController=require('./../controllers/productsController')

productsRoutes.get('/',prodructsController.getProducts)

module.exports=productsRoutes