const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    customer: { type: String, required: [true, "Customer name is required"], minlength: [3, "Customer name must be a minimum of 3 characters"] },
    stars: { type: Number, required: true},
    comment: { type: String, required: [true, "Review is required"], minlength: [3, "Review must be a minimum of 3 characters"] },
})

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Product title is required"], minlength: [3, "Title must be a minimum of 3 characters"] },
    price: { type: Number, required: [true, "Product price is required"] },
    url: { type: String },
    reviews: [ReviewSchema]
})

module.exports = {
    Product: mongoose.model('Product', ProductSchema),
    Review: mongoose.model('Review', ReviewSchema)
}