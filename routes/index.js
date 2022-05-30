const express = require('express');
const { projects } = require('../data.json');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  const date = new Date().toUTCString();
  const data = `\n${date} - IP ADDRESS: ${req.ip}`;
  fs.appendFile('log.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(data);
  res.redirect('/projects');
});

router.get('/projects', (req, res) => {
  res.render('index', { projects });
});

router.get('/projects/:id', (req, res, next) => {
  //Checking to see if project id is in projects array, if it is render the show page otherwise, render the homepage
  const project = projects.filter((project) => project.id == req.params.id);
  if (project.length > 0) {
    return res.render('project', { project });
  } else {
    next();
  }
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
