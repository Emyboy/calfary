const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const KNEX = require('./api/database/connection')
const cors = require('cors')
const rootRoute = require('./api/routes/root.route')


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
	cors({
		origin: '*',
	})
)
app.use("/api", rootRoute)

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/test', async (req, res) => {
// 	try {
// 		const list = await KNEX.raw(`SELECT datname FROM pg_database;`)
// 		res.send(list.rows)
// 	} catch (error) {
// 		console.log('ERROR --', error)
// 		res.status(500).send({...error})
// 	}
// })

app.listen(5000, () => console.log('App running on port 5000 🔥'))
