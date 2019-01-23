const express=require('express')
const productsRoutes=express.Router()
const prodructsController=require('./../controllers/productsController')

productsRoutes.get('/',prodructsController.getProducts)

productsRoutes.get('/:id',prodructsController.getProductById)

productsRoutes.post('/',prodructsController.createProduct)

productsRoutes.put('/:id',prodructsController.updateProductById)

productsRoutes.delete('/:id',prodructsController.deleteProductById)

module.exports=productsRoutes