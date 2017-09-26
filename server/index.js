var express = require('express');
var bodyParser = require('body-parser');
var recipes = require('../helpers/recipes');
var app = express();

// let setHeader = (req, res, next) => {
//   res.setHeader('Content-type', 'application/json');
//   next();
// };

app.use(express.static(__dirname+'/../client/dist'));
// app.use(setHeader);
app.use(bodyParser.json());

app.get('/recipes', (req, res) => {
  // gets all recipes you saved (data from database)
  console.log(req.body);  
  // res.setHeader('Content-Type', 'application/json');
  res.send('get request!');
});

app.post('/recipes', (req, res) => {
  // call helper function to get search results from recipes
  console.log('reqbody', req.body);
  var {input} = req.body;
  console.log('input:',input);
  recipes.searchRecipes(input, res);
  
  // res.send('post sent!');
});

// app.get('/recipes/details', (req, res) => {
//   // when user clicks on details
//   // show details
//   res.send('details!');
// });

app.listen(3000, () => {
  console.log('listening on port 3000');
});