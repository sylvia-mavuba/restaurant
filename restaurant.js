var mongoose = require('mongoose');

var Restaurant = mongoose.model('Restaurant', {

    "name": String,
    "tags": String,
    "pictureURL": String,
    "date": { type: Date, default: Date.now },
    "address": String,
    "city": String,
    "area": String,
    "imgVignette": String
});

module.exports.Restaurant = Restaurant;