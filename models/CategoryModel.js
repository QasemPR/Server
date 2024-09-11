const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required :true 
    }, 
    icon : {
        type : String ,
        required : true ,
    }
})
const category = new mongoose.model('icons',categorySchema)

module.exports = category