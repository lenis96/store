'use strict'
const sequalize=require('sequelize')
const models=require('./../models')
const productsController={

    getProducts:(req,res)=>{
        models.Product.findAll().then(products=>{
            res.json({products:products})
        }).catch((err)=>{

        })
    },

    getProductById:(req,res)=>{
        
        models.Product.findById(req.params.id).then(product=>{
            res.json(product)
        }).catch((err)=>{
            
        })
    }

}


module.exports=productsController