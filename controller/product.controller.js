const Product = require('../models/product.models.js')


//create product
const addProduct = async(req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
     res.status(500).json({message: 'cannot create product'})

    }
}

//find products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: 'cannot find products'})
    }   
}

//find a product
const getProduct = async (req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: 'cannot find products'})
    }
}

//delete product
const deleteProduct = async(req,res) => {
    try {
        const {id}= req.params
        const product= await Product.findByIdAndDelete(id, req.body)
        if (!product) {
            res.status(404).json({message: 'product does not exist'})
        }
        res.status(200).json({message: 'successfully delete product'})

    } catch (error) {
        res.status(500).json({message: 'cannot find products'})
    }
}

//update product
const updateProduct = async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body) //find id whenever have a req from client-side
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//export to product.route.js
module.exports ={ 
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    addProduct,
};