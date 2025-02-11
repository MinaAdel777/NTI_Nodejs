const productModel = require('../Models/product.model');

exports.createProduct = async(req,res)=>{
    try{
        req.body.imageURL = req.file.filename;
        const product = await productModel.create(req.body);
        res.status(201).json(product);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

exports.getProducts= async(req,res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);

    } catch(err){
        res.status(500).json({error:err.message});
    }
}