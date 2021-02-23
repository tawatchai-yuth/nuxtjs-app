const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, maxlength: [50, 'Tile มีข้อความเกิน 50 ตัวอักษร'], required: [true, ''] },
    description: { type: String, maxlength: [500, 'Description มีข้อความเกิน 500 ตัวอักษร'], required: [true, ''] },
    image: { type: String, required: [true, ''], }
});

module.exports = mongoose.model('Post', postSchema);