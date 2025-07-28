const express = require('express')
const crypto = require('crypto')

const generateHash = (req, res) => {
	const password = req.body.password
	const hash = crypto.createHash('sha256')
	password.hash.digest(hex)
	res.json({ password })
	console.log('Password recieved', password)
}

module.exports = { generateHash }
