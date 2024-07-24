// build your `/api/projects` router here
const express = require('express')
const projects = require('./model')
const router = express.Router()

router.get('/', (req,res,next) => {

    projects.getAll()
    .then( projects => res.json(projects))
    .catch(next)
})

router.post('/', (req,res,next) => {
    const {project_name, project_description } = req.body

    if(!project_name || project_name.length <= 0){ 
         return res.status(400).json({
        message:'please provide project name'
    })
}

      if(project_description && typeof project_description !== 'string'){
        return res.status(400).json({
        message:' project description if provided, should be a string'
     })
    }
    

     else

    projects.create(req.body)
    .then(newProject => res.json(newProject))
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