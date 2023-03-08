import express from "express";
import { getProductContorller, addProductContorller } from "../controllers/productController.js";

const productRouter=express.Router();

// get products
productRouter.get('/getproducts', getProductContorller);
productRouter.post('/addproducts', addProductContorller);

export default productRouter;