const express = require('express')
const bcrypt = require('bcrypt')

const saltRounds = 10

const generateHash = async (req, res) => {
	const password = req.body.password
	bcrypt.hash(password, saltRounds, function (err, hash) {
		try {
			res.json({ hash: hash })
			console.log('Password recieved', hash)
		} catch {
			console.log(err)
		}
	})
}




module.exports = { generateHash }
