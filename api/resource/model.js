// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll(id) {
    if(id){
        return db('resources')
        .where('resource_id', id)
        }
        else
    return db('resources')
}

function create(resource){
   return db('resources')
   .insert(resource)
   .then(([id]) => getAll(id))
}

module.exports = {getAll, create,}