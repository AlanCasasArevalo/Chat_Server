const { response } = require('express')
const User = require('../models/user')

const post = async (req, res = response) => {


    const user = new User(req.body)
    const result = await user.save()

    if (result.errors || result.errors !== 'undefined') {
        res.status(500).json({
            result: false,
            message: 'Error while insert on database'
        })
    }

    res.status(201).json({
        result: true,
        message: 'User was created'
    })
}

module.exports = {
    post
}