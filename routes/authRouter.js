const { Router } = require('express')
const {check} = require("express-validator");
const authController = require('../controllers/authController')

const router = Router();
router.post('/new',
    [
        check('name', 'name is required').not().isEmpty(),
        check('email', 'email is required').not().isEmpty(),
        check('password', 'password is required').not().isEmpty(),
    ],
    authController.post)
module.exports = router

