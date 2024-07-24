// build your `/api/resources` router here
const express = require('express')
const resources = require('./model')
const router = express.Router()

router.get('/', (req,res,next) => {

    resources.getAll()
    .then( resources => res.json(resources))
    .catch(next)
})

router.post('/', (req,res,next) => {
    const {resource_name, resource_description, } = req.body

    if(!resource_name || resource_name.length <= 0){ 
         return res.status(400).json({
        message:'please provide resource name'
    })
}

    if( typeof resource_name !== 'string'){
        return res.status(400).json({
        message:'resource name should be a string'
     })
    }

     if(resource_description && typeof resource_description !== 'string'){
        return res.status(400).json({
        message:'resource description if provided, should be a string'
     })
    }

     else 
     resources.getAll()
    .then( resources => {
        const nameChecker = resources.some( resource => resource.resource_name === resource_name)
        if(nameChecker){ return res.status(400).json({
            message: 'resource name is already taken'
        })
    }
    })
    .catch(next)

    resources.create(req.body)
    .then(newResource => res.status(201).json(newResource))
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