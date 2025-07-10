import React, { useState } from "react";
import RecipesData from "../recipes.json";
import ListItem from "./ListItem";

const List = () => {
  const [recipes, setRecipes] = useState(RecipesData);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <ul>
      {recipes.map((recipeItem) => (
        <ListItem        
        key = {recipeItem.id} 
        recipeItem ={recipeItem} 
        handleDelete={handleDelete}/>
      ))}
    </ul>
  );
};

export default List;
