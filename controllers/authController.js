const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const {jwtGenerator} = require("../helpers/jwt");

const post = async (req, res = response) => {

    const { email, password } = req.body

    try {
        const user = new User(req.body)
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(password, salt)

        const result = await user.save()
        if (result.errors || typeof result.errors !== 'undefined') {
            res.status(500).json({
                result: false,
                message: 'Error while insert on database'
            })
        }

        const token = await jwtGenerator(user.uid)

        res.status(201).json({
            result: true,
            user,
            token
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