const User = require('../models/user')
const {response} = require('express')

const getAllUsers = async (req, res = response) => {

    const from = Number(req.query.from) || 0

    const users = await User
        .find({_id: {  $ne: req.uid }})
        .sort('-online')
        .skip(from)
        .limit(20)

    res.status(200).json({
        result: true,
        users
    })
}

module.exports = {
    getAllUsers,
}