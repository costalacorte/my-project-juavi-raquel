import React from "react";
import ListItem from "./ListItem";

const List = ({ recipes, handleDelete }) => {
  return (
    <ul>
      {recipes.map((recipeItem) => (
        <ListItem
          key={recipeItem.id}
          recipeItem={recipeItem}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default List;
