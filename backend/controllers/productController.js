const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");

// Create a product -- Admin
const createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

// Get all product
const getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

// Update product -- Admin
const updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 500));
    };

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
}

// Delete Product
const deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 500));
    }
    await product.deleteOne()
    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
}

// Get Product Details
const getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        product
    })
}



module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails}