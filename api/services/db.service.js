const KNEX = require('../database/connection')


module.exports = {

    runQuery: async (query) => {
        const result = await KNEX.raw(query)
        return result.rows;
    }

}   

