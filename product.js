const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    price:Number
})

let a  = mongoose.model('product', ProductSchema)
module.exports = a