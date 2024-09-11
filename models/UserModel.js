const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    firstname: String,
    lastname: String,
    birth: Date,
    phone: String,
    email: {
        type:String ,
        required:true ,
        unique:false
    },
    password: String

}, {
    timeseries: true
})

const Model = new mongoose.model('users', Users)

module.exports = Model