const mongoose = require('mongoose');

const Testimonials = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    association: {
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model("Testimonials", Testimonials);