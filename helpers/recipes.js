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

    res.status(200);
    res.send(arrOfRecipeObj);
  });
}



var saveToDb = (saveObj, res) => {
  db.save(saveObj)
    .then((inputDatabaseSucessful)=>{
      console.log('inputDatabase>>>>', inputDatabaseSucessful);
      return db.find();
    })
    .then( (findresult) => {
      console.log('after db save result:', findresult);
      res.status(201);
      res.send(findresult);  
    })
    .catch((err)=>{
      console.log(err);
    }); 
    // .then((databasePullResults)=>{
    //   console.log('pull from db:>', databasePullResults);
    //   res.status(201).send(databasePullResults);
    // })
  //after save is sucessful, find from database, then update favorites state array
};



module.exports.searchRecipes = searchRecipes;

module.exports.saveToDb = saveToDb;
