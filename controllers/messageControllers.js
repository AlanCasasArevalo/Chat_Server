const Message = require('../models/message')
const {response} = require('express')

const getAllMessagesByUserId = async (req, res = response) => {
    const myUID = req.uid
    const messageFrom = req.params.from
    try {
        const messages = await Message
            .find({
                $or: [{from: myUID, to: messageFrom}, {from: messageFrom, to: myUID}]
            })
            .sort({ createdAt: 'desc'})
            .limit(30)

        if (!messages || typeof messages === 'undefined') {
            res.status(404).json({
                result: false,
                messages: []
            })
        } else {
            res.status(200).json({
                result: true,
                messages
            })
        }
    } catch (error) {
        res.status(404).json({
            result: false,
            messages: [],
            error: 'Error al recuperar los mensajes, puede que el id de la persona sea erroneo'
        })
    }
}

module.exports = {
    getAllMessagesByUserId
}