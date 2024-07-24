// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll(id) {
    if(id){
        return db('tasks')
        .where('task_id', id)
        }
        else
    return db('tasks as t')
    .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .then(rows => {
        rows.forEach( row => {
            if(row.task_completed === 0){
                row.task_completed = false
            }
            if(row.task_completed === 1){
                row.task_completed = true
            }
        })
        return rows
    })
}

function create(task){
   return db('tasks')
   .insert(task)
   .then(([id]) => getAll(id))
}

module.exports = {getAll, create,}