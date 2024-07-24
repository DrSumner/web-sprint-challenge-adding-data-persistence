// build your `/api/tasks` router here
const express = require('express')
const tasks = require('./model')
const router = express.Router()

router.get('/', (req,res,next) => {

    tasks.getAll()
    .then( tasks => res.json(tasks))
    .catch(next)
})

router.post('/', (req,res,next) => {
    
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