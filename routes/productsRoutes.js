const express=require('express')
const productsRoutes=express.Router()
const prodructsController=require('./../controllers/productsController')

productsRoutes.get('/',prodructsController.getProducts)

productsRoutes.get('/:id',prodructsController.getProductById)

module.exports=productsRoutes