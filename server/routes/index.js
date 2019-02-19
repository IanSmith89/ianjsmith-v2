'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const projectRoutes = require('./projects');

router.route('/projects').get(projectRoutes.getAllProjects);

router.route('/case-study/:id').get(projectRoutes.getProjectById);

module.exports = router;
