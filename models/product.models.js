const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "product name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required: true,
        default:0
    },

   
},

{
    timestamps: true
}

)

const Products = mongoose.model("Products", ProductSchema)

module.exports = Products