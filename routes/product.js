const express = require('express')

var router = express.Router()

const { postProduct, getAllProducts , getFilters, getFilterProducts, searchProducts } = require("../controller/product")


router.post("/product", postProduct)
router.get("/product", getAllProducts)
router.get("/filter", getFilters)
router.get("/filter/:filterBy/:value", getFilterProducts)
router.get("/search/:value", searchProducts)




module.exports = router