const {Product} = require('../models/productsModel.js')
// bycrypt const goes here


module.exports = {
    // index route
    index: (req,res)=>{
        Product.find()
            .then(data =>{
                console.log(data)
                res.json(data);
            })
    },

    // post form route
    postNew: (req,res)=>{
        const product = new Product();
        product.title = req.body.title
        product.price = req.body.price
        product.url = req.body.url
        product.save()  
            .then(addProduct => {
                console.log("We created:", addProduct)
                res.json(addProduct)
            })
            .catch(err => {
                console.log("Error saving Product:", err)
                res.json(err)
            })
    },

    findProduct: (req,res)=>{
        Product.findOne({_id:req.params.id})
            .then(products =>{
                console.log(products)
                res.json(products)
            })
            .catch(err=>{
                res.json(err)
            })
        },

    deleteProduct: (req,res)=>{
        console.log("params",req.params)
        Product.deleteOne({_id:req.params._id})
            .then(deleteProduct => {
                res.json(deleteProduct)
            })
            .catch(err=>{
                console.log('Error eliminating product:', err)
                res.json(err)
            })
        },
        
    editProduct: (req,res)=>{
        console.log("params",req.params)
        console.log(req.body)
        Product.findOne({_id:req.params._id})
            .then(product => {
                console.log(product)
                product.title = req.body.title
                product.price = req.body.price
                product.url = req.body.url
                product.save()
                    .then(editProduct =>{
                        res.json(editProduct)
                    })
                })
            .catch(err=>{
                console.log('Error saving product', err)
            })
        }
    }