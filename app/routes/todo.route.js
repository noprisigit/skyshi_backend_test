const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controller");

router.get("/", todoController.findAll);
router.get("/:id", todoController.findOne);
router.post("/", todoController.create);
router.patch("/:id", todoController.update);
router.delete("/:id", todoController.destroy);

module.exports = router;
