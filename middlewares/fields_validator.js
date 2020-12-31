
const {validationResult} = require("express-validator");

const fieldsValidator = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return  res.status(400).json({
            result: false,
            errors: errors.mapped()
        })
    } else {
        next()
    }
}

module.exports = {
    fieldsValidator
}