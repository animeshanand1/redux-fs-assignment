const express = require("express");
const Product = require("../models/productSchema");

exports.uploadProduct = async (req, res) => {
  const { name, category, description, price, image } = req.body;
  try {
    const newProduct = new Product({
      name,
      category,
      description,
      price,
      image,
    });

    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getProducts=async(req,res)=>{
  try {
    const products=await Product.find({})
    res.status(200).json({products})
  } catch (error) {
    res.status(500).json({message:error})
  
  }
}