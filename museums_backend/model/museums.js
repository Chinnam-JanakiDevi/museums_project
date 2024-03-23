const mongoose = require('mongoose')
const museums = new mongoose.Schema({
    name: String,
    city: String,
    state: String,
    year_established: String
});

module.exports = mongoose.model('museums', museums);