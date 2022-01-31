const KNEX = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		port: 5432,
		user: 'postgres',
		password: '6625',
		database: 'sheruta_new',
	},
})

module.exports = KNEX
