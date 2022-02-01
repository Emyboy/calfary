const authService = require('../services/auth.service')

module.exports = {
	loginDBUser: async (req, res) => {
		console.log('RES --', res)
		res.send('Yup')
	},

	createAppUser: async (req, res) => {
		const data = await authService.createUser(req.body)
		res.send({ ...data, created: true })
	},
}
