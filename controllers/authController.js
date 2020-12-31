const {validationResult} = require("express-validator");
const { response } = require('express')
const post = async (req, res = response) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return  res.status(400).json({
            result: false,
            errors: errors.mapped()
        })
    }

    res.status(200).json({
        result: true,
        message: 'Post message'
    })
}

module.exports = {
    post
}