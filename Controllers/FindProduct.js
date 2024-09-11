const Model = require('../models/ProductModel')

async function FindProducts(req, res) {
    try {
        const data = await Model.find()
        res.status(200).json({
            data: data,
            message: 'Founded Data !',
            success: true,
            error: false
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
module.exports = FindProducts