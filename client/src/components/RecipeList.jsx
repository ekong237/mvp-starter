import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

let RecipeList = ({recipes, onLikeClick}) => (
  <div>
    <div className="recipes">
    {
     recipes.map((recipe, index)=>(
      <RecipeListItem key={index} index ={index} recipe={recipe} onLikeClick={onLikeClick}/>
     ))
    }
    </div>
  </div>
)

export default RecipeList;
