// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll(id) {
    if(id){
    return db('projects')
    .where('project_id', id)
    .first()
    .then(row => {
        
            if(row.project_completed === 0){
                row.project_completed = false
            }
            if(row.project_completed === 1){
                row.project_completed = true
            }
       
        return row
    })
    }
    else
    return db('projects')
    .then(rows => {
        rows.forEach( row => {
            if(row.project_completed === 0){
                row.project_completed = false
            }
            if(row.project_completed === 1){
                row.project_completed = true
            }
        })
        return rows
    })
}

function create(project){
   return db('projects')
   .insert(project)
   .then(([id]) => getAll(id))
}

module.exports = {getAll, create,}