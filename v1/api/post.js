const express = require('express');
const router = express.Router();

// Handle incoming GET requests to /post
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /post'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /post'
    })
});

router.get('/v1/api/post', (req, res, next) => {
    res.status(200).json({
        message: 'Test'
    })
});

module.exports = router;