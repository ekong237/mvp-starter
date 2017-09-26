import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

let RecipeList = ({recipes}) => (
  <div>
    <div className="recipes">
    {
     recipes.map((recipe, index)=>(
      <RecipeListItem key={index} recipe={recipe}/>
     ))
    }
    </div>
  </div>
)

export default RecipeList;
