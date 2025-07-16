import { toast } from "react-toastify";
import recipes from '../recipes.json';

const Item = ({ recipeItem, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(recipeItem.id);
    toast.info("Item removed from list.", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <li className="recipeBox">
      <img
        className="img"
        src={recipeItem.image}
        alt={recipeItem.name}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "8px",
          margin: "10px",
        }}
      />
      <p>
        <strong>Dish:</strong> {recipeItem.name}
        <br />
        {recipeItem.calories < 275
          ? "✅ RELAX EAT CAKE"
          : "❌ EAT VEGGIES BASTARD"}
      </p>
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
};

export default Item;
