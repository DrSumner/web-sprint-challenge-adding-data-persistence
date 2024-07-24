// build your `/api/tasks` router here
const express = require('express')
const tasks = require('./model')
const projects = require('../project/model')
const router = express.Router()

router.get('/', (req,res,next) => {

    tasks.getAll()
    .then( tasks => res.json(tasks))
    .catch(next)
})

router.post('/', (req,res,next) => {

    const {task_description, task_notes, task_completed, project_id } = req.body

    if(!task_description || task_description.length <= 0){ 
         return res.status(400).json({
        message:'please provide task description'
    })
}

    if(!project_id || typeof project_id !== 'number'){ 
        if(typeof project_id !== 'number'){
            return res.status(400).json({
                message:' project_id should be a number'
            })
        }
         return res.status(400).json({
        message:'please provide project_id'
    })
}

    if( typeof task_description !== 'string'){
        return res.status(400).json({
        message:'task description should be a string'
     })
    }
      if(task_notes && typeof task_notes !== 'string'){
        return res.status(400).json({
        message:' task notes if provided, should be a string'
     })
    }

      if(task_completed && typeof task_completed !== 'boolean'){
        return res.status(400).json({
        message:' task completed status if provided, should be a boolean'
     })
    }

     else
     projects.getAll()
    .then( projects => {
        const doesExist = projects.some( project => project.project_id === project_id)
        if(!doesExist){ return res.status(404).json({
            message:`no project with id ${project_id} found`})
        }
    })

    tasks.create(req.body)
    .then(newTask => res.json(newTask))
    .catch(next)
})

router.use((err,req,res,next) => {
    res.status(err.status || 500).json(
        {
            sageAdvice: 'Finding the real error is 90% of the bug fix',
            message: err.message,
            stack: err.stack, 
        })
})
module.exports = router