const jwt = require('jsonwebtoken');

const jwtValidator = async (req, res, next) => {
    const token = req.header('x-token')
    if (!token || typeof token === 'undefined') {
        return res.status(401).json({
            result: false,
            message: 'No token was provided'
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.uid = uid
        next()
    } catch (error) {
        return res.status(401).json({
            result: false,
            message: 'Token not valid'
        })
    }
}

module.exports = {
    jwtValidator
}