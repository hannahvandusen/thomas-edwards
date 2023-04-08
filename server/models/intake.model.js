const mongoose = require('mongoose');
const Intake = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    contactTime: {
        type: String,
        required: true
    },
    contactMethod: {
        type: String,
        required: true
    }, 
    message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Intake", Intake);