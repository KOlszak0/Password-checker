const express = require('express')
const crypto = require('crypto')

const generateHash = (req, res) => {
	const password = req.body.password
	const hash = crypto.createHash('sha256')
	hash.update(password)
	const result = hash.digest('hex')
	res.json({ hash: result })
	console.log('Password recieved', result)
}

module.exports = { generateHash }
