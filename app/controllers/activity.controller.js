const exportToJSON = require("../helpers/json");
const db = require("../models");

const Activity = db.activity;

const findAll = async (req, res) => {
  const activities = await Activity.findAll();

  return exportToJSON(res, 200, "Success", "Success", activities);
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return exportToJSON(
      res,
      404,
      "Not Found",
      `Activity with ID ${id} Not Found`,
      {}
    );
  }

  return exportToJSON(res, 200, "Success", "Success", activity);
};

const create = async (req, res) => {
  const title = req.body.title;
  const email = req.body.email;

  if (!title || title === "")
    return exportToJSON(res, 400, "Baq Request", "title cannot be null", {});

  if (!email || email === "")
    return exportToJSON(res, 400, "Baq Request", "email cannot be null", {});

  const data = {
    title: title,
    email: email,
  };
  const activity = await Activity.create(data);

  return exportToJSON(res, 201, "Success", "Success", activity);
};

const update = async (req, res) => {
  const id = req.params.id;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return exportToJSON(
      res,
      404,
      "Not Found",
      `Activity with ID ${id} Not Found`,
      {}
    );
  }

  const title = req.body.title;
  const email = req.body.email;

  if (!title || title === "")
    return exportToJSON(res, 400, "Baq Request", "title cannot be null", {});


  const data = {
    title: title,
    email: email,
  };

  await Activity.update(data, { where: { id: id } })
    .then(() => {
      return Activity.findByPk(id);
    })
    .then((activity) => {
      return exportToJSON(res, 200, "Success", "Success", activity);
    })
    .catch(() => {
      return exportToJSON(
        res,
        500,
        "Internal Server Error",
        "Something went wrong"
      );
    });
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return exportToJSON(
      res,
      404,
      "Not Found",
      `Activity with ID ${id} Not Found`,
      {}
    );
  }

  await Activity.destroy({ where: { id: id } });

  return exportToJSON(res, 200, "Success", "Success", {});
};

module.exports = { findAll, findOne, create, update, destroy };
