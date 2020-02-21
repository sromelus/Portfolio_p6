const express = require('express');
const {projects} = require('./data.json')


const app = express();



app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});


// An "index" route (/) to render the "Home" page with the locals set to data.projects
// An "about" route (/about) to render the "About" page
// Dynamic "project" routes (/project or /projects) based on the id of the project that render
// a customized version of the Pug project template to show off each project. Which means adding data, or "locals",
// as an object that contains data to be passed to the Pug template.
// Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to.
