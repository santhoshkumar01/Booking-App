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