const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

router.get('/', async (req,res) => {
    const products = await Product.find({
        
    });
    res.send(products);
});

router.post('/', async(req,res) => {
    const productid = req.body;
    const product = new Product(productid);
    const newProduct = await product.save();

    // const product = await Product.insertMany(
    //     {
    //         image: '/image/Products/img-1.jpg',
    //         name: "Apple Watch Series 5 44mm GPS (Nhôm Đen) – Open Box",
    //         price: "8.600.000",
    //         series: "Series 5",
    //         type: "Apple Watch",
    //         numReviews: 5.0,
    //         info: {
    //             status: "Chưa sử dụng",
    //             size: "44mm",
    //             memory: 32,
    //             color: "Đen",
    //             material: "Nhôm",
    //             internet: "GPS"
    //         }
    //     });
    res.send(product);
    console.log(product);
});

router.delete("/delete",async (req, res) => {
    const product = await Product.remove({});
    res.send({msg: "ok"});
    console.log("ok");
})

router.get('/hi', (req,res) => {
    res.send("hi");
});


module.exports = router;