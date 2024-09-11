const Model = require('../models/CategoryModel')

async function FindCategory(req, res) {
    try {
        const data = await Model.find()
        res.status(200).json({
            data: data,
            message: 'Founded Data !',
            success: true,
            error: false
        })
    } catch (error) {
        res.status.json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
module.exports = FindCategory