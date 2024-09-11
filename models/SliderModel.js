const mongoose = require('mongoose')

const SliderModel = new mongoose.Schema({
    url: String
}, {
    timeseries: true
})

const Model = mongoose.model('images', SliderModel)

module.exports = Model