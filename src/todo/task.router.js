const router = require('express').Router()
const { Router } = require('express')  
const httpTask = require('./task.http')


router.route('/task')
    .get(httpTask.getAll)
    .post(httpTask.createNew)

router.route('/task/:id')
    .get(httpTask.getById)
    .put(httpTask.updateById)
    .delete(httpTask.deleteById)



module.exports = {
    router
}