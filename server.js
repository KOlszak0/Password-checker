const express = require('express')
const app = express()
const port = 3000

// importujemy router
const passwordRoutes = require('./routes/password')

// middleware (jeśli będziemy używać JSON)
app.use(express.json())

// używamy trasy
app.use('/password', passwordRoutes)

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
