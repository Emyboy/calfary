module.exports = {
	renderKnexErrorMsg: (knex_error_obj) => {
		switch (knex_error_obj?.routine) {
			case 'auth_failed':
				return "Invalid database credentials"
			default:
				return "Error. Please try again"
		}
	},
}
