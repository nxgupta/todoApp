let express = require("express");
const { getTasks, createTask, getTask, deleteTask, updateTask } = require("../controllers/taskController");

let router = express.Router();
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)
module.exports = router;

