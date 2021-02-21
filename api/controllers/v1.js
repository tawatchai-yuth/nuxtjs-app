const mongoose = require('mongoose');

const Post = require('../models/post');

exports.posts_create_post = (req, res, next) => {

    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    });
    post
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created Post succesfully",
                createdPost: {
                    title: result.title,
                    description: result.description,
                    image: result.image,
                    _id: result._id,
                    request: {
                        type: 'POST',
                        url: 'https://localhost:3000/v1/api/post/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

}