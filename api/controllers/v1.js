const e = require('express');
const mongoose = require('mongoose');

const Post = require('../models/post');

exports.posts_create_post = (req, res, next) => {
    if (req.body.title != '' && req.body.description != '' && req.body.image != '') {
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
                    },
                    status: 1
                });
            })
            .catch(err => {
                if (err.name === "ValidationError") {
                    let errors = {};
                    Object.keys(err.errors).forEach((key) => {
                        errors[key] = err.errors[key].message;
                    });
                    if (errors.title && errors.description) {
                        return res.status(201).json({
                            message: {
                                titlenMsg: errors.title,
                                descriptionMsg: errors.description,
                            },
                            status: 2
                        });
                    } else {
                        if (errors.title) {
                            return res.status(201).json({
                                message: errors,
                                status: 3
                            });
                        } else {
                            return res.status(201).json({
                                message: errors,
                                status: 4
                            });
                        }
                    }
                }
                res.status(500).json({
                    error: err
                });
            });
    } else {
        res.status(201).json({
            message: "ต้องกรอกข้อมูลให้ครบทุกช่อง",
            status: 5
        });
    }
}