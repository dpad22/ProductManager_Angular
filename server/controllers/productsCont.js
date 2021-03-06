const { Product } = require('../models/productsModel.js')
const { Review } = require('../models/productsModel.js')
// bycrypt const goes here


module.exports = {
    // index route
    index: (req, res) => {
        Product.find()
            .then(data => {
                console.log(data)
                res.json(data);
            })
    },

    // post form route
    postNew: (req, res) => {
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
    postReview: (req, res) => {
        const review = new Review();
        review.customer = req.body.customer
        review.stars = req.body.stars
        review.comment = req.body.comment
        review.save()
            .then(addReview => {
                Product.findOne({ _id: req.params.id })
                    .then(product => {
                        product.reviews.push(addReview)
                        product.save()
                            .then(data => {
                                res.json(data)
                            })
                    })
            })
            .catch(err => res.json(err))
    },

    findProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteProduct: (req, res) => {
        console.log("params", req.params)
        Product.deleteOne({ _id: req.params._id })
            .then(deleteProduct => {
                res.json(deleteProduct)
            })
            .catch(err => {
                console.log('Error eliminating product:', err)
                res.json(err)
            })
    },
    deleteReview: (req, res) => {
        Product.findOne({ _id: req.params._id })
            .then(product => {
                for (let review of product.review) {
                    if (review._id.toString() === req.params.reviewId) {
                        review.remove()
                    }
                }
                Product.save()
                res.json(product)
            });
    },

    editProduct: (req, res) => {
        console.log("params", req.params)
        console.log(req.body)
        Product.findOne({ _id: req.params._id })
            .then(product => {
                console.log(product)
                product.title = req.body.title
                product.price = req.body.price
                product.url = req.body.url
                product.save()
                    .then(editProduct => {
                        res.json(editProduct)
                    })
            })
            .catch(err => {
                console.log('Error saving product', err)
            })
    }
}