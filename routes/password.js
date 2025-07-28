const express = require('express')
const router = express.Router()

const { generateHash } = require('../controllers/passwordController')

router.post('/hash', generateHash)

module.exports = router
