const { Router } = require('express')
const {check} = require("express-validator");
const authController = require('../controllers/authController')
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
module.exports = router

