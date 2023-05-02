const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("Newsletter", newsletterSchema);
