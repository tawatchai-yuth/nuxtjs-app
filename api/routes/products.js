const express = require('express');
const router = express.Router();

//Handle incomung GET request to /product
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /product"
    })
});

//Handle incomung POST request to /product
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: "Handling POST requests to /product",
        createdProduct: product
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Update product!"
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Delete product!"
    });
});

module.exports = router;