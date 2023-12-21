const express = require('express')
const router = express.Router();
const {getAllTasks, createTask, deleteTask, updateTask, getTask} = require('../controllers/tasks.js')

router.route('/').get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);


module.exports = router ;