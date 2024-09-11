const Model = require('../models/SliderModel')
async function FindSlider(req, res) {
    try {
        const data = await Model.find()
        res.status(200).json({
            data: data,
            message: "Data Founded !",
            success: true,
            error: false
        })
    } catch (error) {
        res.status(404).json({
            message: error,
            error: true,
            success: false
        })
    }
}
module.exports = FindSlider