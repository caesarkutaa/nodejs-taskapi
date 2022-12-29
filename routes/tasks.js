const express = require('express')
const router = express.Router()
const {getAllTasks,
       createTasks,
       getTask,
       updateTask,
       deleteTask} = require('../controllers/task')


router.get('/', getAllTasks)
router.post('/', createTasks)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)






module.exports = router