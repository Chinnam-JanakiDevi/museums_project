const mongoose = require('mongoose')
const restaurent = new mongoose.Schema({
    id: String,
    URL: String,
    address: String,
    addressLine2: String,
    name: String,
    outcode: String,
    postcode: String,
    rating: Number,
    typeOfFood: String
});

module.exports = mongoose.model('restaurent',restaurent);