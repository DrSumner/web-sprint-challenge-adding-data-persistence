// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

function create(){
   return db('resources')
}

module.exports = {getAll, create,}