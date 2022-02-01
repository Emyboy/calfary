const user = require('../catch/app_user.json')
var fs = require('fs')

module.exports = {
	createUser: async (data) => {
		fs.writeFile('app_user.json', JSON.stringify(data), function (err) {
			if (err) throw err
			console.log('File is created successfully.')
		})
		return data
	},
}
