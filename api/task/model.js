// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('tasks')
}

function create(){
   return db('tasks')
}

module.exports = {getAll, create,}