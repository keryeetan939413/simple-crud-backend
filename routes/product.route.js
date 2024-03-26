const express = require('express')
const router = express.Router()
const {getProducts, deleteProduct, updateProduct, getProduct, addProduct} = require('../controller/product.controller.js')

//find products
router.get('/', getProducts)

//find a product
router.get("/:id", getProduct)

//update product
router.put("/:id", updateProduct)

//delete product
router.delete("/:id", deleteProduct)

//create product
router.post("/", addProduct)

//export to index.js
module.exports = router