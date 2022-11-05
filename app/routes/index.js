const express = require("express");
const router = express.Router();

const activityRoute = require("./activity.route");
const todoRoute = require("./todo.route");

router.use("/activity-groups", activityRoute);
router.use("/todo-items", todoRoute);

module.exports = router;
