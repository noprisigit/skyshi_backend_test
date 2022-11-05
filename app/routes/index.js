const express = require("express");
const router = express.Router();

const activityRoute = require("./activity.route");

router.use("/activity-groups", activityRoute);

module.exports = router;