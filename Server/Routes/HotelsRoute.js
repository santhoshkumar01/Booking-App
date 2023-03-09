const router = require("express").Router();
const { createHotel } = require('../Controllers/HotelsController')

//create
router.post('/', createHotel)
//update
//delete
//get
//getall

module.exports = router