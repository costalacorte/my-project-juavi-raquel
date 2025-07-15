import React, { useState } from "react";
import Recipes from "../recipes.json";
import List from "./RecipesList";
import ModifyList from "../components/ModifyList";

function DashboardPage() {
  const [recipes, setRecipes] = useState(Recipes);

  const handleDelete = (id) => {
    setRecipes((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  return (
    <main className="dashboard-container">
      <h1>Dashboard</h1>
      <ModifyList handleAdd={handleAdd} />
      <List recipes={recipes} handleDelete={handleDelete} />
    </main>
  );
}

export default DashboardPage;
