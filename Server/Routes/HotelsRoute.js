const router = require("express").Router();
const { createHotel, updateHotel, deleteHotel, getSpecificHotel, getAllHotels } = require('../Controllers/HotelsController')

//create
router.post('/', createHotel)
//update
router.put('/:id', updateHotel)
//delete
router.delete('/:id', deleteHotel)
//get
router.get('/:id', getSpecificHotel)
//getall
router.get('/', getAllHotels)

module.exports = router