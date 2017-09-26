var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipeSchema = mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  image_url: String,
  source_url: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

var save = (arrOfRecipeObj) => {
  let arrOfRecipePromises = arrOfRecipeObj.map((eachRecipe)=>{
    return createEach(eachRecipe).save();
  });

  return Promise.all(arrOfRecipePromises);
};

var createEach = (eachRecipe) => {
  var insertRecipeObj = {
    id: eachRecipe.recipe_id,
    name: eachRecipe.title,
    image_url: eachRecipe.image_url,
    source_url: eachRecipe.source_url
  }
  let newRecipePromise = new Recipe(insertRecipeObj);
  return newRecipePromise;
};

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.save = save;
module.exports.selectAll = selectAll;