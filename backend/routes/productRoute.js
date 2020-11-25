const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

router.get('/', async (req,res) => {
    const products = await Product.find({
        
    });
    res.send(products);
});

router.post('/', (req,res) => {
    console.log(req.body);
});

router.get('/hi', (req,res) => {
    res.send("hi");
});


module.exports = router;