const Hotels = require('../Models/HotelsModel')

// createHotel
exports.createHotel = async (req, res) => {
    try {
        const newHotel = new Hotels(req.body)
        await newHotel.save()
        res.status(200).json({
            status: true,
            message: 'Hotel Saved Successfully!'
        })
    } catch (error) {
        console.log('Create Hotel Error' + error);
        res.send(500).json({
            status: false,
            message: error
        })
    }
}


// updateHotel
exports.updateHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json({
            status: true,
            data: updatedHotel,
            message: 'Hotel Updated Successfully!'
        })
    } catch (error) {
        console.log('Update Hotel Error' + error);
        res.send(500).json({
            status: false,
            message: error
        })
    }
}

// deleteHotel
exports.deleteHotel = async (req, res) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: true,
            message: 'Hotel Deleted Successfully!'
        })
    } catch (error) {
        console.log('Delete Hotel Error' + error);
        res.send(500).json({
            status: false,
            message: error
        })
    }
}

//getSpecificHotel
exports.getSpecificHotel = async (req, res) => {
    try {
        const getHotel = await Hotels.findById(req.params.id)
        res.status(200).json({
            status: true,
            data: getHotel
        })
    } catch (error) {
        console.log('getHotel Hotel Error' + error);
        res.send(500).json({
            status: false,
            message: error
        })
    }
}

//getAllHotels
exports.getAllHotels = async (req, res) => {
    try {
        const getHotels = await Hotels.find()
        res.status(200).json({
            status: true,
            data: getHotels
        })
    } catch (error) {
        console.log('getHotels Hotel Error' + error);
        res.send(500).json({
            status: false,
            message: error
        })
    }
}


