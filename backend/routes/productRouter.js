const express = require("express");
const router = express.Router();
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controllers/productController");

router.get('/products', getAllProducts)
router.post('/product/new', createProduct)
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)

module.exports = router