import React from 'react';

let RecipeListItem = ({recipe}) => (
  <div className="recipe" >
    {console.log(recipe)}
    <p></p>
      <img className="photo" src={recipe.image_url}/>
      <div className="name">{recipe.title}</div>
      <a href={recipe.source_url}>Details</a><button name="like">Like</button>

  </div>
)

export default RecipeListItem;


