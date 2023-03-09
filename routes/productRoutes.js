const express = require("express");
const { getProductContorller, addProductContorller } = require("../controllers/productController");

const productRouter=express.Router();

// get products
productRouter.get('/getproducts', getProductContorller);
productRouter.post('/addproducts', addProductContorller);

module.exports=productRouter