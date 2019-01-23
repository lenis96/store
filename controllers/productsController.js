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
        
        models.Product.findByIPk(req.params.id).then(product=>{
            res.json(product)
        }).catch((err)=>{

        })
    },

    createProduct:(req,res)=>{
        models.Product.create(
            {
                description:req.body.description,
                price:req.body.price,
                quantity:req.body.quantity
            }
        ).then((productId)=>{
            models.Product.findByPk(productId.id).then((product)=>{
                res.json(product)
            })
        })
    },

    updateProductById:(req,res)=>{
        models.Product.findById(req.params.id).then(product=>{
            return product
        }).then((product)=>{
            product.description=req.body.description
            product.price=req.body.price
            product.quantity=req.body.quantity
            product.save().then((product)=>{
                res.json(product)
            }).catch((err)=>{
                res.json(err)
            })
        }).catch((err)=>{
            res.json(err)
        })
    },

    deleteProductById:(req,res)=>{
        models.Product.destroy({
            where:{
                id:req.params.id
            }
        }).then((e)=>{
            res.json(e)
        })
    }

}


module.exports=productsController