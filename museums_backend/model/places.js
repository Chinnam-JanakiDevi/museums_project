const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    id: String,
    zone: String,
    state: String,
    city: String,
    name: String,
    type: String,
    establishmentYear: Number,
    timeNeededToVisitInHrs: Number,
    googleReviewRating: Number,
    entranceFeeINR: Number,
    airportWith50kmRadius: String,
    weeklyOff: String,
    significance: String,
    dslrAllowed: String,
    numberOfGoogleReviewInLakhs: Number,
    bestTimeToVisit: String
});
module.exports = mongoose.model('Place',placeSchema);