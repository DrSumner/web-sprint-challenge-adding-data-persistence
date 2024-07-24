// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll(id) {
    if(id){
    return db('projects')
    .where('project_id', id)
    }
    else
    return db('projects')
}

function create(project){
   return db('projects')
   .insert(project)
   .then(([id]) => getAll(id))
}

module.exports = {getAll, create,}