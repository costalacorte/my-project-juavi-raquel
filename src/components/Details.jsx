import React, { useState } from "react";
import Recipes from "../recipes.json";
import List from "./RecipesList";

const DashboardPage = () => {
  const [recipes, setRecipes] = useState(Recipes);

  const handleDelete = (id) => {
    setRecipes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
     
      <List recipes={recipes} handleDelete={handleDelete} />
    </div>
  );
};

export default DashboardPage;
