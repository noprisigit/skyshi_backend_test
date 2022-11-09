const exportToJSON = require("../helpers/json");
const db = require("../models");

const Activity = db.activity;
const Todo = db.todo;

const findAll = async (req, res) => {
  const activityGroupID = req.query.activity_group_id;

  let todos = {};
  if (activityGroupID) {
    todos = await Todo.findAll({
      where: { activity_group_id: activityGroupID },
    });
  } else {
    todos = await Todo.findAll();
  }

  return exportToJSON(res, 200, "Success", "Success", todos);
};

const findOne = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findByPk(id);

  if (!todo) {
    return exportToJSON(res, 404, "Not Found", `Todo with ID ${id} Not Found`, {});
  }

  return exportToJSON(res, 200, "Success", "Success", todo);
};

const create = async (req, res) => {
  const activityGroupID = req.body.activity_group_id;
  const title = req.body.title;

  if (!activityGroupID || activityGroupID === null) {
    return exportToJSON(
      res,
      400,
      "Bad Request",
      "activity_group_id cannot be null",
      {}
    );
  }

  if (!title || title === "") {
    return exportToJSON(res, 400, "Bad Request", "title cannot be null", {});
  }

  const activity = await Activity.findByPk(activityGroupID);
  if (!activity) {
    return exportToJSON(
      res,
      404,
      "Not Found",
      `Activity with ID ${activityGroupID} Not Found`,
      {}
    );
  }

  const data = {
    activity_group_id: activityGroupID,
    title: title,
    is_active: true,
    priority: "very-high",
  };

  const todo = await Todo.create(data);

  return exportToJSON(res, 201, "Success", "Success", todo);
};

const update = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findByPk(id);

  if (!todo) {
    return exportToJSON(res, 404, "Not Found", `Todo with ID ${id} Not Found`, {});
  }

  await Todo.update(req.body, { where: { id: id } })
    .then(() => {
      return Todo.findByPk(id);
    })
    .then((todo) => {
      return exportToJSON(res, 200, "Success", "Success", todo);
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
  const todo = await Todo.findByPk(id);

  if (!todo) {
    return exportToJSON(res, 404, "Not Found", `Todo with ID ${id} Not Found`, {});
  }

  await Todo.destroy({ where: { id: id } });

  return exportToJSON(res, 200, "Success", "Success", {});
};

module.exports = { findAll, findOne, create, update, destroy };
