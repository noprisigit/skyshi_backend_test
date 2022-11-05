const exportToJSON = require("../helpers/json");
const db = require("../models");

const Activity = db.activity;

const findAll = async (req, res) => {
  const activities = await Activity.findAll();

  return res.status(200).json({
    status: "Success",
    message: "Success",
    data: activities,
  });
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return exportToJSON(
      404,
      "Not Found",
      `Activity with ID ${id} Not Found`,
      activity
    );
  }

  return res.status(200).json({
    status: "Success",
    message: "Success",
    data: activity,
  });
};

const create = async (req, res) => {
  const title = req.body.title;
  const email = req.body.email;

  if (title === "") {
    return exportToJSON(400, "Baq Request", "title cannot be null", {});
  }

  const data = {
    title: title,
    email: email,
  };
  const activity = await Activity.create(data);

  return exportToJSON(201, "Success", "Success", activity);
};

const update = async (req, res) => {
  const id = req.params.id;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return exportToJSON(
      404,
      "Not Found",
      `Activity with ID ${id} Not Found`,
      activity
    );
  }

  const title = req.body.title;
  const email = req.body.email;

  if (title === "") {
    return exportToJSON(400, "Baq Request", "title cannot be null", {});
  }

  const data = {
    title: title,
    email: email,
  };

  await Activity.update(data, { where: { id: id } })
    .then(() => {
      return Activity.findByPk(id);
    })
    .then((activity) => {
      return exportToJSON(200, "Success", "Success", activity);
    })
    .catch(() => {
      return exportToJSON(500, "Internal Server Error", "Something went wrong");
    });
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return exportToJSON(
      404,
      "Not Found",
      `Activity with ID ${id} Not Found`,
      activity
    );
  }

  await Activity.destroy({ where: { id: id } });

  return exportToJSON(200, "Success", "Success", {});
};

module.exports = { findAll, findOne, create, update, destroy };
