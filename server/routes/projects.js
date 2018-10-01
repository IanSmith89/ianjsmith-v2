"use strict";

const Project = require("../models/Project");
const project = new Project();

const getAllProjects = function(req, res, next) {
  Project.forge()
    .fetchAll()
    .then(response => project.format(res.send(response)))
    .catch(err => next(err));
};

const getProjectById = function(req, res, next) {
  const { id } = req.params;

  Project.forge()
    .where({ id })
    .fetch({ require: true })
    .then(response => project.format(res.send(response)))
    .catch(err => next(err));
};

module.exports = {
  getAllProjects,
  getProjectById
};
