const express = require('express');
// import index.js in routes folder
const routes = require('./routes');
const app = express();

app.set("view engine", "pug")
app.use('/static', express.static('public'));

//route to the home page `index.js`
app.use(routes)

// create an error message if user try no navigate to a non identified resource.
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// render the error template
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log(err.stack);
  res.render('error')
})

// set our port
app.set('port', process.env.PORT || 3000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}!`);
});
