import React from 'react';

let RecipeListItem = ({recipe}) => (
  <div className="recipe" >
    {console.log(recipe)}
    <p></p>
      <img className="photo" src={recipe.url}/>
      <div className="name">{recipe.name}</div>
      <div className="description">{recipe.description}</div>

  </div>
)

export default RecipeListItem;

// 
