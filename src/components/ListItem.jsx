
const Item = ({recipeItem,handleDelete }) => {
   
  return (
    <li>
      <p>
        <strong>Dish:</strong> {recipeItem.name} <br />
        {recipeItem.calories < 275 ? "✅ RELAX EAT CAKE" : "❌ EAT VEGGIES BASTARD"}
      </p>
      <button onClick={() => handleDelete(recipeItem.id)}>DELETE</button>
    </li>
  );
};

export default Item;
