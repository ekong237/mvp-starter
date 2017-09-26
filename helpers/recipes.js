var request = require('request');
var url = require('url');
var express = require('express');
var db = require('../database');

var searchRecipes = (searchInput, res) => {
  var options = {
    url: 'http://food2fork.com/api/search',
    qs: {
      key: 'afd0d5b6fb86afab9fb04cef3f8ec768',
      q: searchInput
    } 
  };

  request.get(options, (error, response, body) => {
    if (error) { console.log(error); }
    console.log('RECIPES:', JSON.parse(response.body));
    var arrOfRecipeObj = JSON.parse(response.body).recipes;
    console.log('arrOfRecipeObj:', arrOfRecipeObj);
    res.send(arrOfRecipeObj);

  });
}



var getDetails = (searchObjResultsArr) => {
  var recipesArr = searchObjResultsArr.recipes;

  // var options = {
  //   url: 'http://food2fork.com/api/get',
  //   key: 'afd0d5b6fb86afab9fb04cef3f8ec768', 
  //   rId: //id of recipe
  // };
    
  
};

// db.save(arrOfRecipeObj)
//       .then((inputDatabase)=>{
//         console.log('inputDatabase>>>>', inputDatabase);
//       })

module.exports.searchRecipes = searchRecipes;
module.exports.getDetails = getDetails;
