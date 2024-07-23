// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('projects')
}

function create(){
   return db('projects')
}

module.exports = {getAll, create,}