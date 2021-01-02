const User = require('../models/user')

const userConnectionStatus = async (uid = '', online = false) => {
    const user = await User.findById(uid)
    user.online = online
    await user.save();
    return user
}

module.exports = {
    userConnectionStatus,
}