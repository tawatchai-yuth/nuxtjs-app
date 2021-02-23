const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, maxlength: [2, 'title'], required: [true, ''] },
    description: { type: String, maxlength: [2, 'description'], required: [true, ''] },
    image: { type: String, required: [true, ''], }
});

module.exports = mongoose.model('Post', postSchema);