import React from 'react';

let RecipeListItem = ({recipe, onLikeClick}) => (
  <div className="recipe" >
    
    <p></p>
      <img className="photo" src={recipe.image_url}/>
      <div className="name">{recipe.title}</div>
      
      <div><a href={recipe.source_url}>Details</a></div>
      <div><button name="like" onClick={()=> onLikeClick(recipe) }>Like</button></div>

  </div>
)

export default RecipeListItem;


