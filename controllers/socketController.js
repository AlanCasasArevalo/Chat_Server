const User = require('../models/user')
const Message = require('../models/message')

const userConnectionStatus = async (uid = '', online = false) => {
    const user = await User.findById(uid)
    user.online = online
    await user.save();
    return user
}

const saveMessageInDDBB = async (payload) => {
    /*
    {
        from: '',
        to: '',
        message: ''
    }
     */
    try {
        const message = new Message(payload)
        await message.save();
        // console.log(`Mensaje guardado => ${payload}`)
        return {
            result: true,
            message
        }
    } catch (error) {
        return {
            result: false,
            error
        }
    }
}

module.exports = {
    userConnectionStatus,
    saveMessageInDDBB
}