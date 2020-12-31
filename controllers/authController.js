const { response } = require('express')
const User = require('../models/user')

const post = async (req, res = response) => {

    const { email } = req.body

    try {
        // Se puede hacer asi, o bien como esta en el catch.
        // const emailExists = await User.findOne({email})
        //
        // if (!emailExists || typeof emailExists === 'undefined') {
        //     res.status(400).json({
        //         result: false,
        //         message: 'Email is already in data base'
        //     })
        // }

        const user = new User(req.body)
        const result = await user.save()
        if (result.errors || typeof result.errors !== 'undefined') {
            res.status(500).json({
                result: false,
                message: 'Error while insert on database'
            })
        }
        res.status(201).json({
            result: true,
            user
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                result: false,
                message: 'Credentials are wrong'
            })
        }
        return res.status(500).json({
            result: false,
            message: `Error while insert on database ${error}`
        })
    }


}

module.exports = {
    post
}