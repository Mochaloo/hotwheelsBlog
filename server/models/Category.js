const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This is required.'
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model('Category', categorySchema);
