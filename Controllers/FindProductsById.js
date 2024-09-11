const Model = require('../models/ProductModel')

async function FindProductsById(req, res) {
    try {
        const { name } = req.body
        const data = await Model.find({ category: name })

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
module.exports = FindProductsById