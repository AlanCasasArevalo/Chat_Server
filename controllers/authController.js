const {validationResult} = require("express-validator");
const { response } = require('express')
const post = async (req, res = response) => {
    res.status(200).json({
        result: true,
        message: 'Post message'
    })
}

module.exports = {
    post
}