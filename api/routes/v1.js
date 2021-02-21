const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/v1');

router.post('/api/post', PostsController.posts_create_post);

module.exports = router;