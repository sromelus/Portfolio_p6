const express = require('express');
const {projects} = require('../data.json')
const router = express.Router();


router.get("/", (req, res) => {
  res.redirect('/projects')
})

router.get("/projects", (req, res) => {
  res.render('index', { projects })
})

router.get("/projects/:id", (req, res) => {
  const project = projects.filter( project => project.id == req.params.id)
  const name = 'james'
  res.render('project', { project })
})

router.get("/about", (req, res) => {
  res.render('about')
})

module.exports = router;
