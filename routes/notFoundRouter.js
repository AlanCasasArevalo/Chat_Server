const {notFoundMethod} = require("../controllers/notFoundController");
const { Router } = require('express')

const router = Router();
router.all('*', notFoundMethod)
module.exports = router

