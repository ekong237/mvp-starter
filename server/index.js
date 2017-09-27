var express = require('express');
var bodyParser = require('body-parser');
var recipes = require('../helpers/recipes');
var app = express();
var db = require('../database');
// let setHeader = (req, res, next) => {
//   res.setHeader('Content-type', 'application/json');
//   next();
// };

app.use(express.static(__dirname+'/../client/dist'));
// app.use(setHeader);
app.use(bodyParser.json());

app.get('/recipes', (req, res) => {
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

app.post('/recipes/favorites', (req, res) => {
  var favObj = req.body.favorited;
  console.log('should be clicked obj:', favObj);
  recipes.saveToDb(favObj, res) 
});

app.get('/recipes/favorites', (req, res) => {
  // gets all recipes you saved (data from database)
  console.log('1getting favorites')
  db.find().then((results)=>{
    res.status(201).send(results);
  })
});


app.listen(3000, () => {
  console.log('listening on port 3000');
});