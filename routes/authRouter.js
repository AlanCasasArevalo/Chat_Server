const { Router } = require('express')
const {check} = require("express-validator");
const authController = require('../controllers/authController')
const {jwtValidator} = require("../middlewares/jwt_validator");
const {fieldsValidator} = require("../middlewares/fields_validator");

const router = Router();
router.post('/register',
    [
        check('name', 'name is required').not().isEmpty(),
        check('email', 'email is required').not().isEmpty(),
        check('email', 'email is wrong formatted').isEmail(),
        check('password', 'password is required').not().isEmpty(),
        fieldsValidator
    ],
    authController.postRegister)

router.post('/',
    [
        check('email', 'email is required').not().isEmpty(),
        check('email', 'email is wrong formatted').isEmail(),
        check('password', 'password is required').not().isEmpty(),
        fieldsValidator
    ],
    authController.postLogin)

router.get('/refresh_token',
    jwtValidator,
    authController.getRefreshToken)

module.exports = router

