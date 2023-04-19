const mongoose = require("mongoose");

const Subscriber = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    dateSubscribed: {
        type: String
        // default: Date.now
    }
});

module.exports = mongoose.model("Subscriber", Subscriber);

