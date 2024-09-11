const express = require('express')
const FindProduct = require('../Controllers/FindProduct')
const FindCategory = require('../Controllers/FindCatgoey')
const FindProductsById = require('../Controllers/FindProductsById')
const FindSlider = require('../Controllers/FindSlider')
const router =express.Router()

router.get('/product',FindProduct)
router.get('/category',FindCategory)
router.post('/productbyid',FindProductsById)
router.get('/slider',FindSlider)


module.exports = router