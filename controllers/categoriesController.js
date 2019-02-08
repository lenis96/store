'use strict'
const sequalize=require('sequelize')
const models=require('./../models')
const categoriesController={

    getCategories:(req,res)=>{
        models.Category.findAll().then(categories=>{
            res.json({categories:categories})
        }).catch((err)=>{
            res.json(err)
        })
    },

    getCategoryById:(req,res)=>{
        
        models.Category.findByPk(req.params.id).then(category=>{
            res.json(category)
        }).catch((err)=>{

        })
    },

    createCategory:(req,res)=>{
        models.Category.create(
            {
                description:req.body.description,
            }
        ).then((categoryId)=>{
            models.Category.findByPk(categoryId.id).then((category)=>{
                res.json(category)
            })
        })
    },

    updateCategoryById:(req,res)=>{
        models.Category.findByPk(req.params.id).then(category=>{
            return category
        }).then((category)=>{
            category.description=req.body.description
            category.save().then((category)=>{
                res.json(category)
            }).catch((err)=>{
                res.json(err)
            })
        }).catch((err)=>{
            res.json(err)
        })
    },

    deleteCategoryById:(req,res)=>{
        models.Category.destroy({
            where:{
                id:req.params.id
            }
        }).then((e)=>{
            res.json(e)
        })
    }

}


module.exports=categoriesController