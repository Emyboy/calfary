const dbService = require('../services/db.service')

module.exports = {
	getAllDatabase: async (req, res) => {
		const data = await dbService.runQuery(`SELECT datname FROM pg_database;`)
		res.send(data)
	},
}
