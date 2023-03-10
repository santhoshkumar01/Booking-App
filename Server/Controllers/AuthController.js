const Users = require('../Models/UsersModel')
var bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
    const plainPassword = req.body.password
    var salt = bcrypt.genSaltSync(10)
    try {
        const newUser = new Users({
            userName: req.body.userName,
            email: req.body.email,
            password: bcrypt.hashSync(plainPassword, salt)
        })
        await newUser.save()
        res.status(201).json({
            status: true,
            message: 'User Registed Successfully!'
        })
    } catch (error) {
        console.log('Registration Error ' + error);
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await Users.findOne({ userName: req.body.userName });
        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User Not Found In DB'
            })
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                status: false,
                message: 'Incorrect Password Or UserName'
            })
        }
        res.status(200).json({
            status: true,
            data: user,
            message: 'User Logged In Successfully'
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: `Error While Login ${error}`
        })
    }
}