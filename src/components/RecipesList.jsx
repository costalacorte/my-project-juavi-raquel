import React, { useState } from 'react';
import RecipesData from '../recipes.json';

const List = () => {
  const [recipes, setRecipes] = useState(RecipesData);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <ul>
      {recipes.map((recipeItem) => (
        <li key={recipeItem.id}>
          <p>
            <strong>Dish:</strong> {recipeItem.name} <br />
            {recipeItem.calories < 275
              ? '✅ RELAX EAT CAKE'
              : '❌ EAT VEGGIES BASTARD'}
          </p>
          <button onClick={() => handleDelete(recipeItem.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
