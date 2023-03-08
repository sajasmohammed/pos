import Product from "../models/productModel.js";

export const getProductContorller=async(req, res)=>{
    try {
        const product=await Product.find();
        res.status(200).send(product);
    } catch (error) {
        console.log(error.message);
    }
}

export const addProductContorller=async(req, res)=>{
    try {
        const product= new Product(req.body);
        await product.save();
        res.status(200).send("Product created");
    } catch (error) {
        console.log(error.message);
    }
}