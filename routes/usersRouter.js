const { Router } = require('express')
const usersControllers = require('../controllers/usersControllers')
const {jwtValidator} = require("../middlewares/jwt_validator");
const router = Router();

router.get('/users',
    jwtValidator,
    usersControllers.getAllUsers)

module.exports = router

