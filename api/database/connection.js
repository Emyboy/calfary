const KNEX = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		port: 5432,
		user: 'postgres',
		password: '66251',
		database: 'postgres',
	},
})

module.exports = KNEX
