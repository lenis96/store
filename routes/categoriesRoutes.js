const express=require('express')
const categoriesRoutes=express.Router()
const categoriesController=require('./../controllers/categoriesController')

categoriesRoutes.get('/',categoriesController.getCategories)

categoriesRoutes.get('/:id',categoriesController.getCategoryById)

categoriesRoutes.post('/',categoriesController.createCategory)

categoriesRoutes.put('/:id',categoriesController.updateCategoryById)

categoriesRoutes.delete('/:id',categoriesController.deleteCategoryById)

module.exports=categoriesRoutes