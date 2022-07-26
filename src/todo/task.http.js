const { getAllMyTasks, getTaskById, createTask, deleteTaskItem, updateTaskItem} = require('./task.controllers')

const getAll = (req, res) => {
    const data = getAllMyTasks()
    res.status(200).json({
        items : data.length,
        response : data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
       const data = getTaskById(id)
       if(data.id){
        res.status(200).json(data)
       }else{
           res.status(400).json({message: 'Invalid ID'})
       }
    }else{
        res.status(400).json({message: 'Id is a number'})
    }
}

const createNew = (req, res) => {
    const data = req.body
    if(data){
        createTask(data)
        res.status(200).json(data)
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
       const data = deleteTaskItem(id)
       if(data === true){
        res.status(200).json(data)
       }else{
           res.status(400).json({message: 'Invalid ID'})
       }
    }else{
        res.status(400).json({message: 'Task does not exist'})
    }
}

const updateById = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if(id){
       const item = updateTaskItem(id, data)
       if(item){
        res.status(200).json(item)
       }else{
        res.status(406).json({message: 'Invalid ID'})
       }
    }else{
        res.status(400).json({message: 'Task does not exist'})
    }
}

module.exports = {
    getAll,
    getById,
    createNew,
    deleteById, 
    updateById
}