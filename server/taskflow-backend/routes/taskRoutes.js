const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask
} = require("../controllers/taskController");

// GET /api/tasks
router.get("/", getAllTasks);

// POST /api/tasks
router.post("/", createTask);

// PUT /api/tasks/:id
router.put("/:id", updateTaskStatus);

// DELETE /api/tasks/:id
router.delete("/:id", deleteTask);


module.exports = router;