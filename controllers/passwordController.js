const express = require('express')
const bcrypt = require('bcrypt')
const zxcvbn = require('zxcvbn')

const saltRounds = 10

const generateHash = async (req, res) => {
	try {
		const password = req.body.password
		const { score, feedback, crack_times_display } = zxcvbn(password)

		const hash = await bcrypt.hash(password, saltRounds)
		res.json({ hash: hash, score: score, feedback: feedback, crack_times_display: crack_times_display })
		console.log('Password recieved', hash)
	} catch (err) {
		console.error('Hashing error:', err)
		res.status(500).json({ msg: 'Hashing failed' })
	}
}

module.exports = { generateHash }
