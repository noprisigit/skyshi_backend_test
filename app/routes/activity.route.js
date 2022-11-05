const express = require("express");
const router = express.Router();

const activityController = require("../controllers/activity.controller");

router.get("/", activityController.findAll);
router.get("/:id", activityController.findOne);
router.post("/", activityController.create);
router.patch("/:id", activityController.update);
router.delete("/:id", activityController.destroy);

module.exports = router;
