const mongoose = require('mongoose')

const Connect = async () => {
    try {
        await mongoose.connect(process.env.mongodb_URL)
        setTimeout(() => {
            console.log('Connected to Database !')
        }, 1500);
    } catch (error) {
        console.log("Error Connecting to Database !")
    }
}
module.exports = Connect
