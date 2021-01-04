const { Router } = require('express')
const messageControllers = require('../controllers/messageControllers')
const {jwtValidator} = require("../middlewares/jwt_validator");
const router = Router();

router.get('/messages/:from',
    jwtValidator,
    messageControllers.getAllMessagesByUserId)

module.exports = router

