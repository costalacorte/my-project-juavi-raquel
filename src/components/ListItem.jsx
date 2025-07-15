
import recipes from '../recipes.json'
const Item = ({recipeItem,handleDelete }) => {
   
  return (
    <li className='recipeBox'>
     <img className='img'
        src={recipeItem.image}
        alt={recipeItem.name}
        style={{ width:"50px", height:"auto", borderRadius:"8px", margin:"10px"}} />
      <p>
        <strong>Dish:</strong> {recipeItem.name} <br/>
        {recipeItem.calories < 275 ? "✅ RELAX EAT CAKE" : "❌ EAT VEGGIES BASTARD"}
      </p>
      <button onClick={() => handleDelete(recipeItem.id)}>DELETE</button>
    </li>
  );
};

export default Item;
