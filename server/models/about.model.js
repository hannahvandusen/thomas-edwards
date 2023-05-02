const mongoose = require('mongoose');

const About = new mongoose.Schema({
    about: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("About", About); 